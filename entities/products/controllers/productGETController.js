const getProduct = require('../services/getProduct')

module.exports = async function(req, res){

   var id = req.body.productId;
   
   try{
    var product = await getProduct(id);
    console.log(product);
    if(!product) return res.status(422 ).send("Not FOund");
    res.status(200).send(product);
    return;
   }
   catch(err){
    console.error(err);
    res.status(404).send(err);
   }
}