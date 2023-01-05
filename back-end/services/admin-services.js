const { Attendance } = require('../models')
// const { imgurFileHandler } = require('../helpers/file-helpers')

const adminServices = {
  getAttendances: (req, cb) => {
    Attendance.findAll({
      raw: true,
      nest: true
    })
      .then(attendances => cb(null, { attendances }))
      .catch(err => cb(err))
  },
  deleteAttendance: (req, cb) => {
    Attendance.findByPk(req.params.id)
      .then(attendance => {
        if (!attendance) {
          const err = new Error("Attendance didn't exist!")
          err.status = 404
          throw err
        }
        return attendance.destroy()
      })
      .then(deletedAttendance => cb(null, { attendance: deletedAttendance }))
      .catch(err => cb(err))
  },
  postAttendance: (req, cb) => {
    const { name, account, workHours, description } = req.body
    if (!name) throw new Error('Attendance name is required!')

    const { file } = req

    // imgurFileHandler(file)
    //   .then(filePath => Attendance.create({
    //     name,
    //     account,
    //     workHours,
    //     description,
    //     image: filePath || null
    //   }))
    //   .then(newAttendance => cb(null, { attendance: newAttendance }))
    //   .catch(err => cb(err))
  }
}

module.exports = adminServices
