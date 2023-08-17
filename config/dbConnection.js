const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const url = process.env.MONGO_CONNECT_URL

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000
        });
        console.log('Database connected...',connect.connection.name)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDb