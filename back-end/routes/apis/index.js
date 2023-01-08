const express = require('express')
const router = express.Router()
const admin = require('./modules/admin')
const passport = require('../../config/passport')

const attendanceController = require('../../controllers/apis/attendance-controller')
const userController = require('../../controllers/apis/user-controller')
const { authenticated, authenticatedAdmin } = require('../../middleware/api-auth')
const { apiErrorHandler } = require('../../middleware/error-handler')

router.use('/admin', authenticated, authenticatedAdmin, admin)
router.get('/attendances', authenticated, attendanceController.getAttendances)
router.get('/attendance', authenticated, attendanceController.getAttendance)
router.post('/attendance', authenticated, attendanceController.postAttendance)

// JWT signin
router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn)
router.post('/signup', userController.signUp)

router.get('/logout', userController.logout)
router.get('/users', userController.getUsers)
router.use('/', apiErrorHandler)

module.exports = router
