const mongoose = require('mongoose')
const { isEmail } = require('validator')

const userSchema = new mongoose.Schema({
    address: {
        geolocation: {
            lat: String,
            long: String
        },
        city: {
            type: String
        },
        street: {
            type: String
        },
        number: {
            type: Number
        },
        zipcode: {
            type: String
        }
    },
    name: {
        firstname: {
            type: String,
            required: true,
            min: 3,
            max: 255
        },
        lastname : {
            type: String,
            required: true,
            min: 6,
            max: 255
        }
    },
    email: {
        type: String,
        required: true,
        validate: [isEmail],
        unique: true,
        min: 6,
        max: 255
    },
    username: {
        type: String,
        required: true,
        min: 6,
        max: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024 // larger than other fields because the password will be hashed
    },
    phone: {
        type: String
    },
    admin: {
        type: Boolean,
        default: false
    }
}) 

const UserModel = mongoose.model('users', userSchema)

module.exports = UserModel