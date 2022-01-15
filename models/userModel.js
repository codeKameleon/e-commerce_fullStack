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
            required: true
        },
        name : {
            type: String,
            required: true
        }
    },
    email: {
        type: String,
        required: true,
        validate: [isEmail],
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    inscriptionDate: {
        type: Date,
        deault: Date.now()
    },
    admin: {
        type: Boolean,
        default: false
    }
}) 

const UserModel = mongoose.model('users', userSchema)

module.exports  = UserModel