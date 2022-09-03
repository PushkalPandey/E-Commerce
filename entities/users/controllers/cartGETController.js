
var getCart = require("../services/getCart")


module.exports =  async function(req,res){
if(req.session.isAuthenticated){

    var cart = await getCart(req.session.username);
    // console.log("cart", user.products);
    // console.log("Loaded Cart", cart);
    
    res.render("cart.ejs",{username:req.session.username,products:cart,isAuth:true});
    
    return;
}
res.redirect("/user/login");
}