// use express
const express = require("express");
const app = express();

// use logger
const logger = require("morgan");
app.use(logger("dev"));

// what port
const port = process.env.PORT || 3000;

// use node-fetch
const $fetch = require("node-fetch"); // dollar sign is sometimes used to indicate back end

// access public folder for styles
app.use(express.static("public"));

// route handlers
app.get("/", (req, res) => {
    res.redirect("/home");
})

app.get("/home", (req, res) => {
    res.render("home.ejs", {cat: "https://images.dog.ceo/breeds/pitbull/20190801_154956.jpg"});
})

// Endpoint: https://dog.ceo/api/breeds/image/random

// HTTP requests
// 1) utilize our endpoint
// 2) get a response
    // a) if good - parse the data
    // b) else - throw an error
// 3) Do something with parsed data
// 4) Handle errors


// global vs. local context - within the route handler or outside
// base URL global, routes local

const baseURL = "https://dog.ceo/api";
app.get("/getimage", (req, res) => {
    let route = "breeds/image/random";
    let endpoint = `${baseURL}/${route}`;
    // HTTP requests
    fetch(endpoint) // 1) utilize our endpoint
    .then(response => {
        if (response.ok) {
            return response.json(); // step 2a) if good - parse the data
        } else {
            throw Error("Neethi broke it!!!"); // step 2b) else - throw an error
        }
    })
    .then(data => {
        console.log(data);
        res.render("home.ejs", {cat: data.message});
    }) // step 3) Do something with parsed data
    .catch(err => {
        console.log(err);
        res.render("home.ejs", {cat: "https://http.cat/404"})
    }) // 4) Handle errors
})

// this is called chaining (with the dots)
// JS is asynchronous - we handle this with callback functions, async await, or promises (as above)

// fetch only throws an error if there is a NETWORK issue, not a data issue. If there is no data it won't throw an error.

// listener
app.listen(port, () => {
    console.log(`Dog Image server on port ${port}`)
})