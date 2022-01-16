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
const getUserById = async(req, res) => {}

const editUser = async(req, res) => {}

const deleteUser = async(req, res) => {}

module.exports = { 
    getAllUsers
}