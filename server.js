const express = require('express')
const fs = require('fs')
const path = require('path')
const errorHandler = require('./middleware/errorHandler')
const connectDb = require('./config/dbConnection')
const { marked } = require('marked');
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000

// db connection
connectDb()

app.use(express.json())
app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'index.md'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading README.md:', err);
            res.send('Welcome to contacts rest api')
            return;
        }
        // Convert Markdown to HTML
        const htmlContent = marked(data);
        // Send the HTML content as the response
        res.send(htmlContent);
    });
})
app.use('/api/contacts', require('./routes/contactRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(PORT, () => {
    console.log('listening on port:', PORT)
})