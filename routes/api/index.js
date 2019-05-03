const router = require("express").Router();
const bookRoutes = require("./books");
const dataRoutes = require("./data");

// Book routes
router.use("/books", bookRoutes);
router.use("/data", dataRoutes);

module.exports = router;