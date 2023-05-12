const express = require("express");
const router = express.Router();
// what do we do when specific routes are triggered
const results = require("../controllers/resultsControllers");

router.get("/", results.getResults);

module.exports = router;