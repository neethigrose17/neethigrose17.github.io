// put this at the top for environment variables (confidential info)
require("dotenv").config();

// use express
const express = require("express");
const app = express();

// what port
const port = process.env.PORT || 3000;

// logger
const logger = require("morgan");
app.use(logger("dev"));

// access public folder
app.use(express.static("public"));

console.log(process.env);

// route handlers
app.get("/", (req, res) => {
    res.redirect("/home");
})

app.get("/home", (req, res) => {
    res.render("form.ejs");
})

// listener
app.listen(port, () => {
    console.log(`PGDemo on port ${port}`);
})

// npm i pg
// npm i dotenv

