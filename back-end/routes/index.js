const express = require('express')
const router = express.Router()
const admin = require('./modules/admin')
const restController = require('../controllers/attendance-controller')
const userController = require('../controllers/user-controller')

router.use('/admin', admin)
router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)
router.get('/attendances', restController.getAttendances)
router.use('/', (req, res) => res.redirect('/attendances'))

module.exports = router
