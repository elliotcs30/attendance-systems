const attendanceServices = require('../../services/attendance-services')
const { Attendance } = require('../../models')

const attendanceController = {
  getAttendances: (req, res, next) => {
    attendanceServices.getAttendances(req, (err, data) => err ? next(err) : res.json(data))
  },
  getAttendance: (req, res, next) => {
    return res.render('attendance')
  },
  postAttendance: (req, res, next) => {
    try {
      const { account, name, description } = req.body
      if (!account) throw new Error('Attendance account is required!')

      Attendance.create({ // 產生一個新的 Attendance 物件實例，並存入資料庫
        account,
        name,
        workHours: '8',
        description
      }).then(user => {
        res.json({
          status: 'success',
          data: user
        }) // 顯示成功訊息
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = attendanceController
