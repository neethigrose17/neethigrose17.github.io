// put this at the top for environment variables (confidential info)
require("dotenv").config();

// CONNECTION
// Need the env variable we created - destructure
const {TMDB_API_KEY} = process.env;

module.exports = {TMDB_API_KEY};