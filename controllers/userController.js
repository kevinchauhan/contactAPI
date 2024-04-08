const asyncHandler = require('express-async-handler')
const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// @desc Register user
// @route POST /api/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        res.status(400)
        throw new Error("All fields required")
    }
    const userExists = await userModel.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error("Email already exists")
    }

    // Hash passowrd
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        password: hashedPassword
    })
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email })
    } else {
        res.status(400)
        throw new Error('User data not valid')
    }
})

// @desc Login user
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400)
        throw new Error("ALL fields required")
    }

    const user = await userModel.findOne({ email })
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user._id
            }
        }, process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1d' })
        res.status(200).json({ accessToken })
    } else {
        res.status(401)
        throw new Error("Email or password is not valid")
    }

})

// @desc current user
// @route GET /api/users/current
// @access private
const currentUser = asyncHandler((req, res) => {
    res.json({ message: "current user" })
})

module.exports = { registerUser, loginUser, currentUser }