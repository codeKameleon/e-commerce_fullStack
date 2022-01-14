require('dotenv').config()
const express = require('express')

const connectDB = require('./config/db')
const productRoutes  = require('./routes/productRoutes')

const app = express()
const port = process.env.PORT || 4000

// Connection to Database (MongoDB Atlas)
connectDB()

// Express config
app.use(express.json())

// Routes
app.use('/api/products', productRoutes)

// Server
app.listen(port, () => console.log('server started'))