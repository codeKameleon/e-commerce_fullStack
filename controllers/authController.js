const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserModel = require('../models/userModel')
const { registerValidation } = require('../middlewares/validationMiddleware')
   
const createNewUser = async(req, res) => {
    // Form validation
    const  { error } = registerValidation(req.body)
    if(error) return res.status(400).send({ error: error.details[0].message })

    // Check is user already exists
    const registeringUser = UserModel.findOne({ email: req.body.email })
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
        phone: req.body.phone
    })

    try {
        const newUser = await user.save()
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
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET )
    res.header('auth-token', token).send({message: token})
}

const logOutUser = async(req, res) => {}

module.exports = {
    createNewUser,
    logUser,
    logOutUser
}