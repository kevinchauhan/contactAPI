const asyncHandler = require('express-async-handler')
const contactModel = require('../models/contactModel')

// @desc Get all contacts
// @route GET /api/contacts
// @access private
const getContact = asyncHandler(async (req, res) => {
    const contacts = await contactModel.find({ user_id: req.user.id })
    res.status(200).json({ contacts })
})

// @desc Get Single contacts
// @route GET /api/contacts/:id
// @access private
const getSingleContact = asyncHandler(async (req, res) => {
    const contact = await contactModel.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error('Contact not found')
    }
    res.status(200).json(contact)
})

// @desc Create new contacts
// @route POST /api/contacts
// @access private
const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error('All fields are required')
    }

    const contacts = await contactModel.create({ name, email, phone, user_id: req.user.id })

    res.status(200).json(contacts)
})

// @desc Update contacts
// @route PUT /api/contacts/:id
// @access private
const updateContact = asyncHandler(async (req, res) => {
    const contact = await contactModel.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error('Contact not found')
    }
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403)
        throw new Error("User dont have permission")
    }

    const updatedContact = await contactModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedContact)
})

// @desc Delete contacts
// @route DELETE /api/contacts/:id
// @access private
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await contactModel.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error('Contact not found')
    }
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403)
        throw new Error("User dont have permission")
    }

    await contact.deleteOne({ _id: req.params.id })
    res.status(200).json(contact)
})

module.exports = { getContact, getSingleContact, createContact, updateContact, deleteContact }