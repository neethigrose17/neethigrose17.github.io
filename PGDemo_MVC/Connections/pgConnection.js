// put this at the top for environment variables (confidential info)
require("dotenv").config();

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

// take our file and add an object called conn and export it
module.exports = {conn};