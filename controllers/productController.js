const ProductModel =  require('../models/productModel')

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find({})
        res.send(products)
    } catch (error) {
        console.error(error)
        res.status(400).send({message: "Bad request"})
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id)
        res.send(product)
    } catch (error) {
        console.error(error)
        res.status(400).send({message: "Bad Request"})
    }
}

module.exports = {
    getAllProducts,
    getProductById
}