const { User } = require('../../models')
const userController = {
  getUsers: (req, res) => {
    Promise.all([
      User.findAndCountAll({
        nest: true,
        raw: true
      })
    ]).then(([users]) => {
      const data = users.rows.map(r => ({ ...r }))
      return res.json({
        users: data
      })
    })
  }
}
module.exports = userController
