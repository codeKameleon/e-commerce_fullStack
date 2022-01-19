const mongoose = require("mongoose")

const ObjectId = mongoose.Schema.Types.ObjectId

const cartSchema = new mongoose.Schema({
    userId: {
        type: ObjectId
    },
    date: {
        type: Date,
        default: Date.now()
    },
    products: [
        {
            productId: {
                type: ObjectId
            },
            quantity: {
                type: Number,
                default: 0
            }
        }
    ]
})

const CartModel = mongoose.model('carts', cartSchema)

module.exports = CartModel;