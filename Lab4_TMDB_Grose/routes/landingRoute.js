const express = require("express");
const router = express.Router();

const landing = require("../controllers/landingControllers");

router.get("/", landing.landingRender);

module.exports = router;