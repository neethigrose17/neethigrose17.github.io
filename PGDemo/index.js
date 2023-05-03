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

// CONNECTION
// Need the env variables we created - destructure
const {PG_HOST, PG_PORT, PG_DB, PG_USER, PG_PW} = process.env
const credentials = {
    host: PG_HOST,
    port: PG_PORT,
    database: PG_DB,
    user: PG_USER,
    password: PG_PW
}

const {Client} = require("pg"); // use postgres client object
const conn = new Client(credentials);
conn
    .connect()
    .then(console.log(`Connected to ${PG_DB} database`))
    .catch(err => console.log(`Yo! Randy, I got an error: ${err}`))

// BLUEPRINTS - DONE by DBA
// noSQL like MongoDB, we are the DBA. We define the database at the same time that you are going to use it.

// QUERIES



// route handlers
app.get("/", (req, res) => {
    res.redirect("/form");
})

app.get("/form", (req, res) => {
    res.render("form.ejs");
})

app.get("/createdata", (req, res) => {
    // build our query
    let query = `INSERT INTO todos (description, iscomplete, user_id)
                VALUES ('${req.query.item}', false, 1)
                RETURNING *;`
    // tell database to run our query
    conn.query(query)
    .then(data => {
        res.redirect("/form");
    })
    .catch(err => res.send(`Error: ${err}`));
})  

app.get("/home", (req, res) => {
    let query = `SELECT *
                FROM todos;`
    conn.query(query)
    .then(data => {
        res.render("home.ejs", {data: data.rows})
    })
    .catch(err => res.send(`Error reading data: ${err}`));
})
    
// listener
app.listen(port, () => {
    console.log(`PGDemo on port ${port}`);
})

// npm i pg
// npm i dotenv

// nodemon and react (live server with automatic refresh) may not capture changes to .env