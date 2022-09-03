const addToCart = require('../services/addToCart')

module.exports = async function(req,res){
    
    if(req.session.isAuthenticated!==true){
        console.log("Hithesr")
        res.status(403).send("First Login");
        return;
    }
console.log(req.body);
try{
 const updatedUser = await  addToCart(req.session.username, req.body);
 console.log(updatedUser);
 res.send(updatedUser);
}
catch(err){
    console.log(err);
    res.send("error");
}
}