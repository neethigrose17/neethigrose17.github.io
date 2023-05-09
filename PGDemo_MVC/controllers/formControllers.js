// exported as an object
exports.formRender = (req, res) => {
    res.render("form.ejs");
}

exports.formGetDoggies = (req, res) => {
    console.log("I got the doggies!!!")
    res.end();
}