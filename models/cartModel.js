const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    products: [
        {
            productId: {
                type: Number
            },
            quantity: {
                type: Number
            }
        }
    ]
})

const CartModel = mongoose.model('carts', cartSchema)

module.exports = CartModel;