require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const router  = require('./routes/api')
const app = express()

const dbURI = process.env.DB_URI
const port = process.env.PORT || 4000

//db connection
mongoose.connect(dbURI)
.then((result) => {
    app.listen(port, "localhost", () => console.log('server started'))
    console.log('db connected')
})
.catch((err) => console.log(err))

//initialize routes
app.use('/api', router)

app.use(express.json())

//error handling middleware
app.use(function(err,req,res,next){
    console.log(err);
    res.status(422).send({error: err.message})
});