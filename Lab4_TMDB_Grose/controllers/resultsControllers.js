// import API key
const {TMDB_API_KEY} = require('../Connections/dbConnection');

// use API to get Now Playing movies
const baseURL = "https://api.themoviedb.org/3";

// exported as an object

exports.getResults = (req, res) => {
    // build http request
    
    let route = `movie/now_playing?api_key=${TMDB_API_KEY}`;
    let endpoint = `${baseURL}/${route}`;

    fetch(endpoint) // 1) utilize an endpoint
    .then(response => { // 2) get a response
        if (response.ok) {
            return response.json() // parse if good
        } else {
            throw Error("Error with now playing!") // error if bad
        }
    })
    .then(data => { // 3) do something with parsed data
        res.render("results.ejs", {display: data.results})
    })
    .catch(err => { // 4) error handling
        console.log("Fetch api error: ", err)
        let errmessage = err;
        res.render("error.ejs", {errmessage})
    })
}