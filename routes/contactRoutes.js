const express = require('express')
const {getContact, createContact, getSingleContact, updateContact, deleteContact} = require('../controllers/contactController')
const validateToken = require('../middleware/validateTOkenHandler')
const router = express.Router()

// validate route with jwt token
router.use(validateToken)

router.route('/').get(getContact)

router.route('/').post(createContact)

router.route('/:id').get(getSingleContact)

router.route('/:id').put(updateContact)

router.route('/:id').delete(deleteContact)

module.exports = router