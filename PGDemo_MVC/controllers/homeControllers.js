// import conn
const {conn} = require('../Connections/pgConnection');

exports.homeRender = (req, res) => {
    let query = `SELECT *
                FROM todos;`
    conn.query(query)
    .then(data => {
        res.render("home.ejs", {data: data.rows})
    })
    .catch(err => res.send(`Error reading data: ${err}`));
}