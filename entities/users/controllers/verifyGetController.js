const validateUser = require("../services/validateUser");
const jwt = require("jsonwebtoken");
require('dotenv').config()


module.exports = async function(req,res){
  
    
    console.log("HERE",req.params.token);
    const token = req.params.token;
    console.log("TOKEN",token);

    if(token===null){return res.sendStatus(40);}
    try{

      var verifyToken = await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        console.log(verifyToken);

     var validUser = await validateUser(verifyToken._id);
     if(validUser.verficationStatus){
        res.redirect("/user/login");
        return;
     }
     else{
        res.end("validation Error");
     }
    }
    catch(err){
        console.log(err);
		console.log(err.message);
        return res.render("verifyByMail.ejs",{err:err});
        
    }


}