const router = require("express").Router();
const verifyAccessToken = require("../../middleware/verifyAccessToken");
const { GameLine, Question } = require("../../db/models");

router.get("/", verifyAccessToken, async (req, res) => {
  try {
    const { user } = res.locals;
    const gameLines = await GameLine.findAll({
      include: {
        model: Question,
      },
      where: { gameId: user.gameId },
    });
    if (gameLines) {
      res.status(200).json({ message: "success", gameLines });
    }
    res.status(400).json("Что-то пошло не так");
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.put("/:id", verifyAccessToken, async (req, res) => {
  try {
    const { user } = res.locals;
    const { statusQuest } = req.body;
    const { id } = req.params;
    const result = await GameLine.update(
      { userId: user.id, statusQuest },
      { where: { id } }
    );
    if (result[0] > 0) {
      const gameLine = await GameLine.findOne({ where: { id } });
      res.status(200).json({ message: "success", gameLine });
      return;
    }
    res.status(400).json("Что-то пошло не так");
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
