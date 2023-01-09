const adminServices = require('../../services/admin-services') // 新增這裡，引入 admin-services
const adminController = {
  getAttendances: (req, res, next) => {
    adminServices.getAttendances(req, (err, data) => err ? next(err) : res.render('admin/attendances', data))
  },
  createAttendance: (req, res, next) => {
    // create
  },
  editAttendance: (req, res, next) => {
    // edit
  },
  deleteAttendance: (req, res, next) => {
    adminServices.deleteAttendance(req, (err, data) => {
      if (err) return next(err)
      req.session.deletedData = data
      return res.redirect('/admin/attendances')
    })
  }
}

module.exports = adminController
