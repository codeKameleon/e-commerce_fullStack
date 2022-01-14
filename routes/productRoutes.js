const express =  require('express')
const router =  express.Router()

// @description GET all products
// @route GET /api/products

router.get('/', (req, res) => {
    res.send('test')
})

// @description GET one product
// @route GET /api/products/:id

// @description GET one product
// @route GET /api/products/:id

// @description POST a new product (only ADMIN)
// @route POST /api/products

// @description UPDATE a product (only ADMIN)
// @route PUT /api/products/:id

// @description DELETE a product (only ADMIN)
// @route DELETE /api/products/:id


module.exports = router