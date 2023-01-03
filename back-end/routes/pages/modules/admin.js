const express = require('express')
const router = express.Router()
const adminController = require('../../../controllers/pages/admin-controller')

router.get('/pages/attendances', adminController.getAttendances)
router.use('/', (req, res) => { res.redirect('/admin/attendances') })
module.exports = router
