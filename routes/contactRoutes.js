const express = require('express')
const {getContact, createContact, getSingleContact, updateContact, deleteContact} = require('../controllers/contactController')
const router = express.Router()

router.route('/').get(getContact)

router.route('/').post(createContact)

router.route('/:id').get(getSingleContact)

router.route('/:id').put(updateContact)

router.route('/:id').delete(deleteContact)

module.exports = router