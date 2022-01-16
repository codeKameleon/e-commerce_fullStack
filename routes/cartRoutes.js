const express =  require('express')
const { getAllCarts, getCartById } = require('../controllers/cartController')
const router =  express.Router()

// @description GET all carts
// @route GET /api/carts
router.get('/', getAllCarts)

// @description GET one cart
// @route GET /api/carts/:id
router.get('/:id', getCartById)

// @description POST a product to cart 
// @route POST /api/carts/:id

module.exports = router