const express = require("express");
const router = express.Router();
// what do we do when specific routes are triggered
const data = require("../controllers/dataControllers");

router.get("/", data.createData);

module.exports = router;