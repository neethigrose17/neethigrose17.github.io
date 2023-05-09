const express = require("express");
const router = express.Router();
// what do we do when specific routes are triggered
const form = require("../controllers/formControllers");

router.get("/", form.formRender);
router.get("/doggy", form.formGetDoggies);

module.exports = router;