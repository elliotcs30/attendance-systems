const express = require('express')
const router = express.Router()

const restController = require('../controllers/attendance-controller')

router.get('/attendances', restController.getAttendances)

router.use('/', (req, res) => res.redirect('/attendances'))

module.exports = router
