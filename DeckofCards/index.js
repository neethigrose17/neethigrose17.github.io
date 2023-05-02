// use express
const express = require("express");
const app = express();

// use logger
const logger = require("morgan");
app.use(logger("dev"));

// what port to use
const port = process.env.PORT || 3000;

// access public folder for styles
app.use(express.static("public"));

// node fetch for APIs
const $fetch = require("node-fetch");

// route handlers
app.get("/", (req, res) => {
    res.redirect("/home");
})

// HTTP requests
// 1) utilize our endpoint
// 2) get a response
    // a) if good - parse the data
    // b) else - throw an error
// 3) Do something with parsed data
// 4) Handle errors

const baseURL = "https://deckofcardsapi.com/api/deck";

app.get("/home", (req, res, next) => {
    let cards = 10;
    let route = `new/draw/?count=${cards}`;
    let endpoint = `${baseURL}/${route}`;
    fetch(endpoint)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw Error("Carlos messed it up!");
        }
    })
    .then(parsedData => {
        // console.log(parsedData);
        req.cardArray = parsedData.cards;
        next();
    })
    .catch(err => {
        console.log("Error - ", err)
        res.render("error.ejs")
    })
    // res.render("home.ejs");
}) 

const {dealCards, updateValues, sortHand} = require("./helper")

app.get("/home", (req, res) => {
    let updatedCardValues = updateValues(req.cardArray);
    let dealtCards = dealCards(updatedCardValues);
    // let sortedComputer = sortHand(dealtCards.computer);
    // let sortedPlayer = sortHand(dealtCards.player);
    res.render("home.ejs", {data: dealtCards, sorted: sortHand});
    // console.log(sortedComputer);
    // console.log(sortedPlayer);
})

// listener
app.listen(port, () => {
    console.log(`Deck of Cards server on port ${port}`);
})
