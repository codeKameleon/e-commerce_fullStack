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

const addProductsToCart = async (req, res) => {
    const products =  {
        products: req.body.products
    }

    try {
        if(!ObjectID.isValid(req.params.id)) {
            return res.status(400).send(({message: "This cart does not exist"}))
        }
        const productsUpdated = await CartModel.findByIdAndUpdate(
            req.params.id,
            { $push: productsUpdated },
            { new: true, upsert: true }
        )
        res.send(products)
    } catch(error) {
        console.log(error)
        res.status(400).send({message: "Bad Request"})
    }
}

module.exports = {
    getAllCarts,
    getCartById,
    addProductsToCart
}