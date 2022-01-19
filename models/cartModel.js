const mongoose = require("mongoose")

const ObjectId = mongoose.Schema.Types.ObjectId

const cartSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: 'users',
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    products: [
        {
            productId: {
                type: ObjectId,
                required: true,
                ref: 'products',
                unique: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ]
})

const CartModel = mongoose.model('carts', cartSchema)

module.exports = CartModel;