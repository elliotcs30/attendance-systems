const { User } = require('../models')

const userServices = {
  getUsers: (req, cb) => {
    Promise.all([
      User.findAndCountAll({
        nest: true,
        raw: true
      })
    ]).then(([users]) => {
      const data = users.rows.map(r => ({ ...r }))
      return cb(null, {
        users: data
      })
    }).catch(err => cb(err))
  }
}

module.exports = userServices
