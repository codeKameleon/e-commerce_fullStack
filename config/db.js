require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()

const dbURI = process.env.DB_URI

const connectDB = async() => {
    try {
        await mongoose.connect(dbURI)
        console.log('db connected')
    } catch(error) {
        console.log("MongoDB connection FAIL")
        process.exit.apply(1)
    }
}

module.exports = connectDB