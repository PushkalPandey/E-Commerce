

module.exports = function(req, res) {
    if(req.session.isAuthenticated){
        res.render("updatePassword.ejs",{username:req.session.username, isAuth:true});
        return;
    }
    res.redirect("/user/login");
}