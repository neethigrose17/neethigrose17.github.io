// put this at the top for environment variables (confidential info)
// require("dotenv").config();

// use express
const express = require("express");
const app = express();

if(process.env.NODE_ENV !== "prod") {
    // logger only if in dev mode
    const logger = require("morgan");
    app.use(logger("dev"));
}

// what port
const port = process.env.PORT || 3000;

// access public folder
app.use(express.static("public"));

// no NODE_ENV variable is visible. This means we are in development mode.
// console.log(process.env);

// CONNECTION from a separate file
// const {conn} = require('./Connections/pgConnection');
const rootRoute = require("./routes/rootRoute");
const formRoute = require("./routes/formRoute");
const dataRoute = require("./routes/dataRoute");
const homeRoute = require("./routes/homeRoute");

// route handlers

app.use("/", rootRoute);

app.use("/form", formRoute);

// QUERIES

app.use("/createdata", dataRoute);

app.use("/home", homeRoute);

    
// listener
app.listen(port, () => {
    console.log(`PGDemo on port ${port}`);
})

// npm i pg
// npm i dotenv

// nodemon and react (live server with automatic refresh) may not capture changes to .env