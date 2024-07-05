const router = require("express").Router();
const verifyAccessToken = require("../../middleware/verifyAccessToken");
const { GameLine, Question } = require("../../db/models");

// добавить verifyAccessToken
router.get("/", verifyAccessToken, async (req, res) => {
  try {
    const { user } = res.locals;
    console.log(user, 123);
    const gameLines = await GameLine.findAll({
      include: {
        model: Question,
      },
      where: { gameId: user.gameId }, //Добавитьь user.gameId
    });
    if (gameLines) {
      res.status(200).json({ message: "success", gameLines });
      return;
    }
    res.status(400).json("Что-то пошло не так");
    return;
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.put("/:id", verifyAccessToken, async (req, res) => {
  try {
    // добавить verifyAccessToken
    //ПРОВЕРИТЬ
    const { user } = res.locals;
    console.log(user, 2222);
    const { statusQuest } = req.body;
    console.log(statusQuest);
    const { id } = req.params;
    const result = await GameLine.update(
      { statusQuest: !statusQuest },
      { where: { id } }
    );
    console.log(result, 3333333);
    if (result[0] > 0) {
      const gameLine = await GameLine.findOne({include: {
        model: Question,
      }, where: { id } });
      res.status(200).json({ message: "success", gameLine });
      return;
    }
    res.status(400).json("Что-то пошло не так");
    return;
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
