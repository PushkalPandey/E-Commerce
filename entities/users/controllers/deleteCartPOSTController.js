var deleteCart = require("../services/deleteCart")


module.exports =  async function(req,res){
if(req.session.isAuthenticated){

    console.log("Hi in delPost",req.body.item);
   var productId = req.body.item;
    const {productDeleted, updatedCart} = await deleteCart(req.session.username,productId);
    // console.log("cart", user.products);
    // console.log("Loaded Cart", updatedCart);
    
    res.render("cart.ejs",{username:req.session.username,products:updatedCart,isAuth:true});
    
    return;
}
res.redirect("/user/login");
}