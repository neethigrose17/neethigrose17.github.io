const express = require("express");
const router = express.Router();
// what do we do when specific routes are triggered
const search = require("../controllers/searchControllers");

router.get("/", search.searchResults);

module.exports = router;