const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { registerValidation } = require('../middlewares/validationMiddleware')

const UserModel = require('../models/userModel')
const CartModel = require('../models/cartModel')
   

const createNewUser = async(req, res) => {
    // Register form validation
    const  { error } = registerValidation(req.body)
    if(error) return res.status(400).send({ error: error.details[0].message })

    // Check is user already exists
    const registeringUser = await UserModel.findOne({ email: req.body.email })
    if(registeringUser) return res.status(400).send({ message: "This email is already taken"})

    // Crypt password
    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    const user = new UserModel({
        address: req.body.address,
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: hashPassword,
        phone: req.body.phone,
        admin: req.body.admin
    })

    const cart = new CartModel({
        userId: user._id,
        products: []
    })
    
    try {
        const newUser = await user.save((err, docs) => {
            if(err) {
                return res.status(400).send({message : err})
            } else {
                cart.save()
            }
        })
        res.send(newUser)
    } catch(error) {
        res.status(400).send(error)
    }
}

const logUser = async(req, res) => {
    // Check if email exists
    const user = await UserModel.findOne({ email: req.body.email })

    if(!user) return res.status(400).send({ message: "Email or password is wrong"})

    // Check if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password)

    if(!validPassword) return res.status(400).send({ message: "Email or password is wrong"})

    // Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, {expiresIn: "24h"})

    res.header('auth-token', token).send({token: token})
    console.log('res header', res.headersSent)
}

const logOutUser = async(req, res) => {
    res.redirect('/api/products')
}

module.exports = {
    createNewUser,
    logUser,
    logOutUser
}