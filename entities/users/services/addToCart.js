const userModel = require("../../../database/models/user");
const cartModel = require("../../../database/models/cart");
const productModel = require("../../../database/models/products");

module.exports = async function(username, item){

    var filter = { "username" : username,"productId":item.productId};
    var update = { "cart" : item};
  
   
// var item = await productModel.findByIdAndUpdate(filter.productId, { quantity: { $inc: 1 } },{new: true});

var globalProduct = await productModel.findById(filter.productId);


globalProduct.quantity =globalProduct.quantity-1;

globalProductduct  = await globalProduct.save();

console.log("Global",globalProduct);

var product = await cartModel.findOne(filter);


if(product!==null){
    console.log("in here")

    product.productQuantity = product.productQuantity+1;
    console.log(product.quantity);
    product  = await product.save();
    return product;
}


var product =  await cartModel.create({
     username: username,
     productName:item.name, 
     productId: item.productId,
     productImg:item.image,
     productDesc:item.productDesc,
     productQuantity:1,
     productPrice:item.price});

     return product;



// let itemIndex=-1;
// if(user.products){
//  itemIndex = user.products.findIndex(p => p.productId == item.productId);
// } 


// if(itemIndex>-1){
// let productItem = user.products[itemIndex];
// productItem.quantity = productItem.quantity+1;
// user.products[itemIndex] = productItem;
// } 
// else {
// //product does not exists in cart, add new item
//  var productId = item.productId;
//  var name = item.name;
//  var price = item.price;
//  var quantity = item.quantity;
//  var image = item.image;
// user.products.push({ productId, quantity, name , image, price });
// }
// user  = await user.save();
    
//     // const updatedUser = await userModel.findOneAndUpdate(filter, {$push: update}, {new: true});

//     console.log("After ADding to Cart",user);
    
//     return user;
}