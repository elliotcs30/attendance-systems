const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')
const admin = require('./modules/admin')
const attendanceController = require('../../controllers/pages/attendance-controller')
const userController = require('../../controllers/pages/user-controller')

router.use('/admin', admin)
router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)
router.get('/signin', userController.signInPage)
router.post('/signin', passport.authenticate('local', { failureRedirect: '/signin', failureFlash: true }), userController.signIn)
router.get('/logout', userController.logout)
router.get('/attendances', attendanceController.getAttendances)
router.use('/', (req, res) => res.redirect('/attendances'))

module.exports = router
