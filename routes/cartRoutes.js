const express =  require('express')

const { verifyToken } = require('../middlewares/authMiddleware')

const { getAllCarts, getCartById, updateCart } = require('../controllers/cartController')

const router =  express.Router()


// @description GET all carts
// @route GET /api/carts
router.get('/', getAllCarts)

// @description GET one cart
// @route GET /api/carts/:id
router.get('/:id', getCartById)

// @description UPDATE a cart with a new product
// @route PUT /api/carts/:id
router.put('/:id', verifyToken, updateCart)

module.exports = router