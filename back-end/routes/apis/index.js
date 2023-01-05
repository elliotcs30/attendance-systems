const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')

const attendanceController = require('../../controllers/apis/attendance-controller')
const userController = require('../../controllers/apis/user-controller')
const { authenticated } = require('../../middleware/auth')
const { generalErrorHandler } = require('../../middleware/error-handler')
router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn)

router.get('/logout', userController.logout)
router.get('/attendances', authenticated, attendanceController.getAttendances)
router.get('/users', userController.getUsers)
router.use('/', generalErrorHandler)

module.exports = router
