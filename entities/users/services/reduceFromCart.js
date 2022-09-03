const cartModel = require("../../../database/models/cart");
const productModel = require("../../../database/models/products");


module.exports = async function(username, item){

    var filter = { "username" : username,"productId":item.productId};
    var update = { "cart" : item};
  
   
var product = await cartModel.findOne(filter);
var globalProduct = await productModel.findById(filter.productId);

if(product!==null){
    console.log("in here")
    product.productQuantity = product.productQuantity-1;
    console.log(product.quantity);
    product  = await product.save();

    globalProduct.quantity =globalProduct.quantity+1;
   globalProductduct  = await globalProduct.save();
   console.log("Global",globalProduct);
    return product;
}
else{
    throw new Error("Product Not Found");
}



   




}