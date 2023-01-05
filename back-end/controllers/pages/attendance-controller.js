const attendanceServices = require('../../services/attendance-services')

const attendanceController = {
  getAttendances: (req, res, next) => {
    attendanceServices.getAttendances(req, (err, data) => err ? next(err) : res.render('attendances', data))
  }
}

module.exports = attendanceController
