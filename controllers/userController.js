const UserModel = require('../models/userModel')

const getAllUsers = async(req, res) => {
    try{
        const users = await UserModel.find({})
        res.send(users)
    } catch(error) {
        console.log(error)
        res.status(400).send({message: "Bad request"})
    }
}

const createNewUser = async(req, res) => {
    const user = new UserModel({
        address: req.body.address,
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        phone: req.body.phone
    })
    try {
        const savedUser = await user.save()
        res.send(savedUser)
    } catch(error) {
        res.status(400).send(error)
    }
}

module.exports = { getAllUsers, createNewUser }