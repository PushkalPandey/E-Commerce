const productModel = require("../../../database/models/products");

module.exports = async function(id){
     console.log(id)
    const product = await productModel.findById(id);
    return product;
}