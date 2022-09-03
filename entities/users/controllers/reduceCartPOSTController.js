const reduceFromCart = require('../services/reduceFromCart')

module.exports = async function(req,res){
console.log(req.body);
try{
 const updatedUser = await  reduceFromCart(req.session.username, req.body);
 console.log(updatedUser);
 res.send(updatedUser);
}
catch(err){
    console.log(err);
    res.send("error");
}
}