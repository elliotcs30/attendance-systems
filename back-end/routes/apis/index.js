const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')
const admin = require('./../pages/modules/admin')

const attendanceController = require('../../controllers/apis/attendance-controller')
const userController = require('../../controllers/apis/user-controller')
const { authenticated, authenticatedAdmin } = require('../../middleware/api-auth')
const { generalErrorHandler } = require('../../middleware/error-handler')
router.use('/admin', authenticated, authenticatedAdmin, admin)
router.get('/attendances', authenticated, attendanceController.getAttendances)
router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn)
router.get('/logout', userController.logout)
router.get('/users', userController.getUsers)
router.use('/', generalErrorHandler)

module.exports = router
