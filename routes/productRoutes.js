const express =  require('express')

const { verifyToken, verifyUserRole } = require('../middlewares/authMiddleware')

const { 
    getAllProducts, 
    getProductById,
    addNewProduct,
    updateProduct,
    deleteProduct
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
router.post('/', verifyToken, verifyUserRole, addNewProduct)

// @description UPDATE a product (only ADMIN)
// @route PUT /api/products/:id
router.put('/:id', verifyToken, verifyUserRole, updateProduct)

// @description DELETE a product (only ADMIN)
// @route DELETE /api/products/:id
router.delete('/:id', verifyToken, verifyUserRole, deleteProduct)

module.exports = router