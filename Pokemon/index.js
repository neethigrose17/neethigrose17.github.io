// import pokedexObj array
const {pokedexObj} = require("./pokedex");
const {pokeBattle} = require("./pokedex");

// use express
const express = require("express");
const app = express();

// which port to use?
const port = process.env.PORT || 3000;

// use a logger
const logger = require("morgan");
app.use(logger("dev"));

// use pokemon package
const pokemon = require("pokemon");

// route handlers
app.get("/", (req, res) => {
    res.send("I am the Pokemon root route.");
})

// display a random pokemon
app.get("/pokemon", (req, res) => {
    res.send(pokemon.random());
})

// display 5 pokemon
app.get("/dex", (req, res) => {
    res.send([pokemon.random(), pokemon.random(), pokemon.random(), pokemon.random(), pokemon.random()]);
})

// display a more detailed pokedex of 5 pokemon
app.get("/pokemon/dex", (req, res) => {
    res.send(pokedexObj);
})

// have 2 pokemon battle
app.get("/battle", (req, res) => {
    res.send(pokeBattle());
})

// listener
app.listen(port, () => {
    console.log(`Pokemon project on port ${port}`);
})