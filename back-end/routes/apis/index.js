const express = require('express')
const router = express.Router()
const userController = require('../../controllers/apis/user-controller')
const { generalErrorHandler } = require('../../middleware/error-handler')

router.get('/users', userController.getUsers)
router.use('/', generalErrorHandler)

module.exports = router
