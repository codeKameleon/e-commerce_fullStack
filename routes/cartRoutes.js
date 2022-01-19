const express =  require('express')

const { verifyToken } = require('../middlewares/authMiddleware')

const { 
    getAllCarts, 
    getCartById, 
    addProductsToCart
 } = require('../controllers/cartController')

const router =  express.Router()


// @description GET all carts
// @route GET /api/carts
router.get('/', getAllCarts)

// @description GET one cart
// @route GET /api/carts/:id
router.get('/:id', getCartById)

// @description POST new products in cart
// @route POST /api/add-cart/:id
router.post('/:id', verifyToken, addProductsToCart)

// @description UPDATE a product in cart 
// @route POST /api/edit-cart/:id

// @description DELETE a product in cart 
// @route DELETE /delete-cart/:id

module.exports = router