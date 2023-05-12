// import API key
const {TMDB_API_KEY} = require('../Connections/dbConnection');

// use API to get searched movies
const baseURL = "https://api.themoviedb.org/3";

// exported as an object

exports.searchResults = (req, res) => {
    let searchstring = req.query.search;
    let route = `search/movie?query=${searchstring}&api_key=${TMDB_API_KEY}`;
    let endpoint = `${baseURL}/${route}`;
    fetch(endpoint)
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw Error ("Error with search!")
        }
    })
    .then(data => {
        if (data.results.length == 0) {
            // This error message is passed to the error page
            let errmessage = "No results, sorry!"
            res.render("error.ejs", {errmessage})
        } else {
            res.render("results.ejs", {display: data.results})
        }
    })
    .catch(err => {
        console.log("Search catch error: ", err)
        // This error message is passed to the error page
        let errmessage = err;
        res.render("error.ejs", {errmessage})
    })
}