const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const connectDb = require('./config/dbConnection')
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000

// db connection
connectDb()

app.use(express.json())
app.get('/', (req, res) => res.send('Welcome to contacts rest api'))
app.use('/api/contacts', require('./routes/contactRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(PORT, () => {
    console.log('listening on port:', PORT)
})