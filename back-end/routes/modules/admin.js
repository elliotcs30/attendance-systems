const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')

router.get('/attendances', adminController.getAttendances)
router.use('/', (req, res) => { res.redirect('/admin/attendances') })
module.exports = router
