const userModel = require("../../../database/models/user");
const cartModel = require("../../../database/models/cart");

module.exports = async function(username){
 
    const cart = await cartModel.find({username: username});
    return cart;
}
