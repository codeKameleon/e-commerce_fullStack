const ProductModel =  require('../models/productModel')

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find({})
        res.send(products)
    } catch (error) {
        console.error(error)
        res.status(500).send({message: "Server Error"})
    }
}

module.exports = {
    getAllProducts
}