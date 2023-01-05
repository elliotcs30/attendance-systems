const { Attendance } = require('../models')

const attendanceServices = {
  getAttendances: (req, cb) => {
    Promise.all([
      Attendance.findAndCountAll({
        nest: true,
        raw: true
      })
    ]).then(([attendances]) => {
      const data = attendances.rows.map(r => ({ ...r }))
      return cb(null, {
        attendances: data
      })
    }).catch(err => cb(err))
  }
}

module.exports = attendanceServices
