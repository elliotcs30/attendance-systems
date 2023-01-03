const adminController = {
  getAttendances: (req, res) => {
    return res.render('admin/attendances')
  }
}

module.exports = adminController
