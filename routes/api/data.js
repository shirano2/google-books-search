const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/data"
router.route("/").get(booksController.findData);

module.exports = router;