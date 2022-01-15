const express =  require('express')
const { 
    getAllProducts, 
    getProductById,
    addNewProduct
} = require('../controllers/productController')
const router =  express.Router()

// @description GET all products
// @route GET /api/products
router.get('/', getAllProducts)

// @description GET one product
// @route GET /api/products/:id
router.get('/:id', getProductById)

// @description POST a new product (only ADMIN)  
// @route POST /api/products
router.post('/', addNewProduct)

// @description UPDATE a product (only ADMIN)
// @route PUT /api/products/:id

// @description DELETE a product (only ADMIN)
// @route DELETE /api/products/:id


module.exports = router