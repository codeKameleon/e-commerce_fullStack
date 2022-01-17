const express =  require('express')

const { getAllUsers } = require('../controllers/userController')

const router =  express.Router()


// @description GET all users
// @route GET /api/users
router.get('/', getAllUsers)

// @description GET one user
// @route GET /api/users/:id

// @description UPDATE a user 
// @route PUT /api/users/:id

// @description DELETE a user
// @route DELETE /api/users/:id


module.exports = router