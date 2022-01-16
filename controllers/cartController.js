const ObjectID = require("mongoose").Types.ObjectId
const CartModel =  require('../models/cartModel')

const getAllCarts = async (req, res) => {
    try {
        const carts = await CartModel.find({})
        res.send(carts)
    } catch (error) {
        console.error(error)
        res.status(400).send({message: "Bad request"})
    }
}

const getCartById = async (req, res) => {
    try {
        if(!ObjectID.isValid(req.params.id)) {
            return res.status(400).send(({message: "This product does not exist"}))
        }
        const cart = await CartModel.findById(req.params.id)
        res.send(cart)
    } catch (error) {
        console.error(error)
        res.status(400).send({message: "Bad Request"})
    }
}

// TO DO : add product to cart

module.exports = {
    getAllCarts,
    getCartById
}