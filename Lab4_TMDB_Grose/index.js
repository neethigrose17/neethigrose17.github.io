// require express
const express = require("express");
// create an instance of express
const app = express();

// which port to use
const port = process.env.PORT || 3000;

// use logger
const logger = require("morgan");
app.use(logger("dev"));

// get access to public folder
app.use(express.static("public"));

// use node fetch
const $fetch = require("node-fetch");

// get routes
const rootRoute = require("./routes/rootRoute");
const landingRoute = require("./routes/landingRoute");
const resultsRoute = require("./routes/resultsRoute");
const searchRoute = require("./routes/searchRoute");

// route handlers

app.use("/", rootRoute);

app.use("/landing", landingRoute);

// use API to get Now Playing movies
app.use("/getresults", resultsRoute);

// route for searching the API using search bar
app.use("/searchresults", searchRoute);

// listener
app.listen(port, () => {
    console.log(`TMDB app on port ${port}`);
})