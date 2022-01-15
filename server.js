const dotenv = require('dotenv')
const express = require('express')

const connectDB = require('./config/db')
const productRoutes  = require('./routes/productRoutes')
const userRoutes  = require('./routes/userRoutes')

const app = express()
const PORT = process.env.PORT || 4000

// Set environment variables
dotenv.config()

// Connection to Database (MongoDB Atlas)
connectDB()

// Middleware
app.use(express.json())

// Routes Middlewares
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

// Server
app.listen(PORT, () => console.log(`server started and runnning at port ${PORT}`))