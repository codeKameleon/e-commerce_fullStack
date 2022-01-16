const bcrypt = require('bcrypt')

const UserModel = require('../models/userModel')
const { registerValidation } = require('../middlewares/validationMiddleware')
   
const createNewUser = async(req, res) => {
    // VALIDATION
    const  { error } = registerValidation(req.body)
    if(error) return res.status(400).send({ error: error.details[0].message })

    // CRYPT PASSWORD
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

const logUser = async(req, res) => {}

const logOutUser = async(req, res) => {}

module.exports = {
    createNewUser,
    logUser,
    logOutUser
}