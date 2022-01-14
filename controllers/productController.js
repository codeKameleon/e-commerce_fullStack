const Product =  require('../models/Product')

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.send(products)
    } catch (error) {
        console.error(error)
        res.status(500).send({message: "Server Error"})
    }
}

module.exports = {
    getAllProducts
}