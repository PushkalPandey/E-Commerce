const findUser = require("../services/findUser");
const mailUser = require("../services/mailUser");
require('dotenv').config()


const jwt = require("jsonwebtoken");
require('dotenv').config()

module.exports = async function(req, res){
    console.log(req.body.email);
    var email = req.body.email;

    var filter = { "email" :email };
   
    try{
    var user = await findUser(filter);
    if(user){
    console.log("this is the user",user);
    console.log("this is the token",user.verificationToken);
    const vt = jwt.sign(user.toJSON(),process.env.ACCESS_TOKEN_SECRET, {expiresIn:'5m'} );
        var username = user.username;
        var msg = "For Password Update";
		// var vt = user.verificationToken;
		var link = `${process.env.URL}/user/updatePassword/${vt}`
		const mail = await mailUser(email,username,msg,link, vt);
		console.log("THIS IS MAIL BODY",mail.response);
	
	 
    

    
    res.end("Check Mail");
    return;
    }
    res.render("backupEmail.ejs",{err:"Email Can't Found Be In Database"});
    return;
    }
    catch(err){
        console.log(err.message);
        res.render("backupEmail.ejs",{err:err.message});
    }
}

