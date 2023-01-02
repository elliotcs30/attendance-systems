const express = require('express')
const router = express.Router()

const restController = require('../controllers/attendance-controller')
const admin = require('./modules/admin')

router.use('/admin', admin)
router.get('/attendances', restController.getAttendances)
router.use('/', (req, res) => res.redirect('/attendances'))

module.exports = router
