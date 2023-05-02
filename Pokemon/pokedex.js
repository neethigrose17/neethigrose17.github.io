// use pokemon package
const pokemon = require("pokemon");

// array of 5 pokemon
// send this object to index.js
exports.pokedexObj = [
    {
        pokemon: pokemon.random(),
        attack: getRandomInt(50,100),
        defense: getRandomInt(0,50),
    },
    {
        pokemon: pokemon.random(),
        attack: getRandomInt(50,100),
        defense: getRandomInt(0,50),
    },
    {
        pokemon: pokemon.random(),
        attack: getRandomInt(50,100),
        defense: getRandomInt(0,50),
    },
    {
        pokemon: pokemon.random(),
        attack: getRandomInt(50,100),
        defense: getRandomInt(0,50),
    },
    {
        pokemon: pokemon.random(),
        attack: getRandomInt(50,100),
        defense: getRandomInt(0,50),
    }
];

// fat arrow function to determine battlers and winner, and print this
// winner is determined by subtracting opponent's defense from your attack and seeing whose attack is higher at the end
exports.pokeBattle = () => {
    let pokeBattlers = [
        {
            pokemon: pokemon.random(),
            attack: getRandomInt(50,100),
            defense: getRandomInt(0,50),
        },
        {
            pokemon: pokemon.random(),
            attack: getRandomInt(50,100),
            defense: getRandomInt(0,50),
        }
    ]
    let winner;
    let name1 = pokeBattlers[0].pokemon;
    let attack1 = pokeBattlers[0].attack;
    let defense1 = pokeBattlers[0].defense;
    let name2 = pokeBattlers[1].pokemon;
    let attack2 = pokeBattlers[1].attack;
    let defense2 = pokeBattlers[1].defense;
    if ((pokeBattlers[0].attack - pokeBattlers[1].defense) > (pokeBattlers[1].attack - pokeBattlers[0].defense)) {
        winner = pokeBattlers[0].pokemon;
    } else if ((pokeBattlers[0].attack - pokeBattlers[1].defense) < (pokeBattlers[1].attack - pokeBattlers[0].defense)) {
        winner = pokeBattlers[1].pokemon;
    } else {
        winner = "none, it was a tie";
    }
    return `Your battlers are: ${name1} with an attack of ${attack1} and a defense of ${defense1}, and ${name2} with an attack of ${attack2} and a defense of ${defense2}. The winner is ${winner}!`;
}

// get random number between 0 and 100
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}