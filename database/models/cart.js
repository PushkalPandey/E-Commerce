const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
   username: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    productImg: {
        type: String,
        required: true
    },
    productDesc: {
        type: String,
        required: true
    },
    
    productQuantity: {
        type: Number,
        required: true,
        default: 1,
        min: [1,'Cant be less than 1'],
        max: [5,'Cant be more than 5'],

    },
    productPrice: {
        type: Number,
        required: true
    }

}, {
    timestamps: true
})

const cartModel = mongoose.model('Cart',cartSchema)

module.exports = cartModel;