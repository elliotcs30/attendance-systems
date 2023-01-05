const adminServices = require('../../services/admin-services')
const adminController = {
  getAttendances: (req, res, next) => {
    adminServices.getAttendances(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  deleteAttendance: (req, res, next) => {
    adminServices.deleteAttendance(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  }
}
module.exports = adminController
