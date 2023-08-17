const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const connectDb = require('./config/dbConnection')
const app = express()
const dotenv = require('dotenv').config()


const PORT = process.env.PORT || 5000

connectDb()

app.use(express.json())
app.use('/api/contacts', require('./routes/contactRoutes'))
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log('listening on port:',PORT)
})