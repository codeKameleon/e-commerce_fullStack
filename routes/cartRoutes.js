const express =  require('express')

const { verifyToken } = require('../middlewares/authMiddleware')

const { 
    getAllCarts, 
    getCartById, 
    addNewCart,
    addProductsToCart
 } = require('../controllers/cartController')

const router =  express.Router()


// @description GET all carts
// @route GET /api/carts
router.get('/', getAllCarts)

// @description GET one cart
// @route GET /api/carts/:id
router.get('/:id', getCartById)

// @description POST a new cart
// @route POST /api/carts/
router.post('/', verifyToken, addNewCart)

// @description POST new products in cart
// @route POST /api/carts/:id
router.post('/:id', verifyToken, addProductsToCart)

// @description UPDATE a product in cart 
// @route PUT /api/carts/:id
// router.put('/:id/', verifyToken, updateProductsToCart)

module.exports = router