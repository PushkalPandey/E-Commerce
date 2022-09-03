const userModel = require("../../../database/models/user");
const cartModel = require("../../../database/models/cart");
const productModel = require("../../../database/models/products");

module.exports = async function(username, productId){

    var filter = { "username" : username,"productId":productId};
 
  var productDeleted = await cartModel.findOneAndDelete(filter);
  console.log("PRODUCT_TO_BE_DELETED",productDeleted);
  var globalProduct = await productModel.findById(filter.productId); 

  globalProduct.quantity = globalProduct.quantity+productDeleted.productQuantity;
  globalProductduct  = await globalProduct.save();

  console.log("GLOBAL_Product",globalProduct);


const updatedCart = await cartModel.find({username: username});





     return {productDeleted, updatedCart};




}