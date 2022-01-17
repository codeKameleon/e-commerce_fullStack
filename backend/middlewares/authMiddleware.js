const jwt = require('jsonwebtoken')

const UserModel = require("../models/userModel")


const verifyToken = (req, res, next) =>  {
    const token = req.header('auth-token')

    if(!token) return res.status(401).send({message: "Access Denied"})

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)

        req.user = verified

        next()
    } catch(error) {
        console.log(error)
        res.status(400).send('Invalid Token')
    }
}

const verifyUserRole = async (req, res, next) => {
    const user = await UserModel.findById(req.user._id)

    if(!user.admin) return res.status(401).send({message: "Access Denied"})
    
    next()
}

module.exports = {
    verifyToken,
    verifyUserRole
}