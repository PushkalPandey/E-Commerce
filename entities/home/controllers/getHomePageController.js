const getProducts = require("../services/getProducts");

module.exports = function(req, res)
{
  if(req.session.isAuthenticated){
    var username = req.session.username;

    // getProducts(username)
    // .then(function(products){

    // })
    // .catch(function(err){

    // })

    res.render("index.ejs",{username:username, isAuth:true});
    return;
  }
  res.render("index.ejs",{username:'guest',isAuth:false});
   
  
}