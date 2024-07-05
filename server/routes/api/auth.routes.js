
const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../db/models");
const generateTokens = require("../../utils/authUtils");
const jwtConfig = require("../../config/jwtConfig");
const { Question, Game, GameLine } = require("../../db/models");
const { where } = require("sequelize");

router.post("/registration", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      res.status(400).json({ message: "заполните все поля" });
      return;
    }

    const isUser = await User.findOne({ where: { email } });

    if (isUser) {
      res
        .status(400)
        .json({ message: "Такой пользователь уже зарегестрирован" });
      return;
    }

    const bcryptPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: bcryptPassword });

    delete user.dataValues.password;

    const { accessToken, refreshToken } = generateTokens({ user });

    if (user) {
      const game = await Game.create({ userId: user.id });
      if (game) {
        const questions = await Question.findAll();
        const gameLines = [];

        for (const question of questions) {
          gameLines.push({
            gameId: game.id,
            questId: question.id,
          });
        }
        await GameLine.bulkCreate(gameLines);
      }

      const gameline = await GameLine.findOne({where: {gameId: game.id} })

      if(gameline) {
        res
        .status(201)
        .cookie("refresh", refreshToken, { httpOnly: true })
        .json({ message: "success", user, accessToken });
      return;
      }
      
    }

    res.status(400).json({ message: "попробуйде еще раз" });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post("/authorization", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email.trim() === "" || password.trim() === "") {
      res.status(400).json({ message: "заполните все поля" });
      return;
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      res.status(400).json({ message: "email или пароль не совпадают" });
      return;
    }

    const bcryptPassword = await bcrypt.compare(password, user.password);

    if (!bcryptPassword) {
      res.status(400).json({ message: "неверный пароль" });
      return;
    }

    delete user.dataValues.password;

    const { accessToken, refreshToken } = generateTokens({ user });

        
    res
      .status(200)
      .cookie("refresh", refreshToken, { httpOnly: true })
      .json({ message: "success", user, accessToken });
      console.log(4444444, { message: "success", user, accessToken });
    return;
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get("/logout", (req, res) => {
  res.locals.user = undefined;
  res.status(200).clearCookie("refresh").json({ message: "success" });
});

module.exports = router;
