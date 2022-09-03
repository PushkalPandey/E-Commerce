const loginUser = require("../services/loginUser");

module.exports = async function (req, res) {
    // var username = req.body.username;
    var email = req.body.email;

    var password = req.body.password;
    console.log(email, password);
    try {
        const data = await loginUser(email, password);

        if(data){
        if (data.isValid) {
            console.log(data, email);

            if (data.user.verficationStatus){
                req.session.isAuthenticated = true;
                req.session.username = data.user.username;
                req.session.userId = data.user._id;
      console.log(req.session.userId);
                res.redirect("/");
                return;
            }
            res.render("verifyByMail.ejs", { err: "Email Has been already sent!!!!" });
            return;
        }
        res.render("login.ejs", { err: "Invalid Credentials" });
        return;
    }

        res.render("login.ejs", { err: "Invalid Credentials" })
    }
    catch (err) {
        console.log("Finding Error", err);
        res.redirect("/user/login");
    }
}