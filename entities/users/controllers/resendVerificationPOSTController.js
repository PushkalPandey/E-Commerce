const findUser = require('../services/findUser')
const mailUser  = require("../services/mailUser");
const jwt = require("jsonwebtoken");
require('dotenv').config()

module.exports = async function(req, res){
    var email = req.body.email;

    require('dotenv').config()
    
    
    var filter = {email: email};
    try{
    var user = await findUser(filter);
    if(!user) return res.render("verifyByMail.ejs",{err:'User not registered'});
    console.log(user);
    const vt = jwt.sign(user.toJSON(),process.env.ACCESS_TOKEN_SECRET , {expiresIn:'5m'})

		var msg = "For Verification";
		// var vt = user.verificationToken;
		var link = `${process.env.URL}/user/verify/${vt}`
		console.log("ACEESSTOKEN",vt);
		const mail = await mailUser(email,user.username,msg,link, vt);
		console.log("THIS IS MAIL BODY",mail.response);
	
	    return res.render("verifyByMail.ejs",{err:''});
    }
    catch (error) {
        console.log(error);
        return res.render("verifyByMail.ejs",{err:error.message});
    }


}