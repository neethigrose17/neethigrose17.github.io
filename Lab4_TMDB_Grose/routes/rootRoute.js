const express = require("express");
const router = express.Router();
// what do we do when specific routes are triggered
const root = require("../controllers/rootControllers");

router.get("/", root.rootRedirect);

module.exports = router;