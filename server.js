const express = require('express')

const connectDB = require('./config/db')
const router  = require('./routes/api')

const app = express()

const port = process.env.PORT || 4000

//db connection
connectDB()

//initialize routes
app.use('/api', router)

app.use(express.json())

//error handling middleware
app.use(function(err,req,res,next){
    console.log(err);
    res.status(422).send({error: err.message})
});

app.listen(port, "localhost", () => console.log('server started'))