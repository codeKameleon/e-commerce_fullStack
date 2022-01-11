const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

const dbURI = "mongodb+srv://codeKameleon:mongogo42@cluster0.flrvf.mongodb.net/fake-store?retryWrites=true&w=majority"
const port = process.env.PORT || 4000

mongoose.connect(dbURI)
.then((result) => {
    app.listen(port)
    console.log('db connected')
})
.catch((err) => console.log(err));