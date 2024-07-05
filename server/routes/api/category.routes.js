const router = require("express").Router();
const { Category } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll();
    if (categories) {
      res.status(200).json({ message: "success", categories });
      return;
    }
    res.status(400).json({ message: "еще раз" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
