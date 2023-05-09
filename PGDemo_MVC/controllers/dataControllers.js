// import conn
const {conn} = require('../Connections/pgConnection');

// exported as an object

exports.createData = (req, res) => {
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
}