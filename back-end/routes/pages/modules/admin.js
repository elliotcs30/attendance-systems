const express = require('express')
const router = express.Router()
const adminController = require('../../../controllers/pages/admin-controller')
const { authenticatedAdmin } = require('../../../middleware/auth')

router.get('/attendances', authenticatedAdmin, adminController.getAttendances)
router.get('/', (req, res) => { res.redirect('/admin/attendances') })
module.exports = router
