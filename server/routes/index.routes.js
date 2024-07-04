const router = require("express").Router();

const authRoutes = require("./api/auth.routes");
const tokensRoutes = require("./api/tokens.routes");
const categoryRoutes = require("./api/category.routes");
const gameLineRoutes = require("./api/gameLine.routes");

router.use("/auth", authRoutes);
router.use("/tokens", tokensRoutes);
router.use("/categories", categoryRoutes);
router.use("/gameLines", gameLineRoutes);

module.exports = router;
