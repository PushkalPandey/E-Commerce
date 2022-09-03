const signupUser = require("../services/signupUser");
const mailUser  = require("../services/mailUser");
const jwt = require("jsonwebtoken");
require('dotenv').config()

module.exports =  async function(req, res){
	try{
		var username = req.body.username;
		var email = req.body.email;
		var password = req.body.password;
		var confirmPassword = req.body.confirmPassword;
	
	
		
	
		if (confirmPassword !== password) {
			res.render("signup", { err: "Both Password and Confirm Password must be same" });
			return;
		}

		console.log("THIS IS SIGNUPPOST",username,password,email);
	
		const user = await signupUser(username,password,email);
		console.log("after signupUser",user);

		const vt = jwt.sign(user.toJSON(),process.env.ACCESS_TOKEN_SECRET, {expiresIn:'5m'} )

		var msg = "For Verification";
		// var vt = user.verificationToken;
		var link = `${process.env.URL}/user/verify/${vt}`
		console.log("ACEESSTOKEN",vt);
		const mail = await mailUser(email,username,msg,link, vt);
		console.log("THIS IS MAIL BODY",mail.response);
	
		return res.status(600).render("verifyByMail.ejs",{err:''});
		
 
	}
	catch(err){
		console.log(err.code);
		console.log(err.message);
		if(err.code==11000){
			res.render("signup",{err:"EMAIL AND USERNAME SHOULD BE UNIQUE"});
			return;
		}
		else{
			res.render("signup",{err:err.message})
			return;
		}
		
	} 
}