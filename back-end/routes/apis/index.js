const express = require('express')
const router = express.Router()
const admin = require('./modules/admin')
const passport = require('../../config/passport')

const attendanceController = require('../../controllers/apis/attendance-controller')
const { apiErrorHandler } = require('../../middleware/error-handler')
const userController = require('../../controllers/apis/user-controller')
const { authenticated, authenticatedAdmin } = require('../../middleware/api-auth')
router.use('/admin', authenticated, authenticatedAdmin, admin)
router.get('/attendances', authenticated, attendanceController.getAttendances)
router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn)
router.get('/logout', userController.logout)
router.get('/users', userController.getUsers)
router.use('/', apiErrorHandler)

module.exports = router
