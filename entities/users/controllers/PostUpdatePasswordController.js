const updatePassword = require("../services/updatePassword");
const jwt = require("jsonwebtoken");
require('dotenv').config()
var ObjectId = require('mongoose').Types.ObjectId; 

module.exports = async function(req,res){

    var token = req.params.token;
    console.log("tokenasdsdasdasdad",token)
   

    var user = await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);


    var new_password = req.body.new_password;
    var confirm_password = req.body.confirm_password;
    var regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
    if(regex.test(new_password)){
        if(confirm_password===new_password){
            var update = {password: new_password};
            var filter = {_id: new ObjectId(user._id) };
            try{
                const updatedUser = await updatePassword(filter,update);
                console.log("Updated user: " + updatedUser);
                res.redirect("/user/login");
            return;
            }
            catch(err){
                res.render("updateForgetPassword.ejs",{token:token, err:err.message});
                return;
            }
        }
        res.render("updateForgetPassword.ejs",{token:token, err:'Both Password should be same'});
        return;
    }

    res.render("updateForgetPassword.ejs",{token:token, err:'password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters'});
    return;

    
}