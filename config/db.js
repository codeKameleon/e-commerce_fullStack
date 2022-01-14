require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()

const dbURI = process.env.DB_URI
const port = process.env.PORT || 4000

const connectDB = async() => {
    try {
        await mongoose.connect(dbURI)
        app.listen(port, "localhost", () => console.log('server started'))
        console.log('db connected')
    } catch(error) {
        console.log("MongoDB connection FAIL")
        process.exit.apply(1)
    }
}

module.exports = connectDB