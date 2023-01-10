const express = require('express')
const router = express.Router()
const adminController = require('../../../controllers/apis/admin-controller')
router.delete('/attendances/:id', adminController.deleteAttendance)
router.get('/attendances', adminController.getAttendances)
module.exports = router
