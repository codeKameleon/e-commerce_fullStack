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

const addNewProduct = async (req, res) => {
    const newProduct = new ProductModel({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image,
        rating: req.body.rating
    })
    try {
        const savedProduct = await newProduct.save()
        res.send(savedProduct)
    } catch (error) {
        console.error(error)
        res.status(400).send({message: "Bad Request"})
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    addNewProduct
}