const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  url: String,
  title: String,
  asin: String,
  price: String,
  brand: String,
  prduct_details: String,
  breadcrumbs: String,
  image_list: Array,
  features: Array,
  quantity: {
    type: Number,
    required: true,
    min: [0,'Cant be less than 0'],
}

});

const productModel = mongoose.model('products', productSchema);

module.exports = productModel;

