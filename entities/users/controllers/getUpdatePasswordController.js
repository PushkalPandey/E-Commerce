
module.exports = function(req, res) {
    var token = req.params.token;

    res.render("updateForgetPassword.ejs",{token:token, err:''});

}