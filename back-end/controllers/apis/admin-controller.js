const adminServices = require('../../services/admin-services')
const adminController = {
  getAttendances: (req, res, next) => {
    adminServices.getAttendances(req, (err, data) => err ? next(err) : res.json(data))
  }
}
module.exports = adminController
