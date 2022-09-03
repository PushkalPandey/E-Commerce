const productModel = require("../../../database/models/products");


module.exports = function(startFrom){
   
   return productModel.find()
   .skip(startFrom)
   .limit(5)
   
   
         
    
}