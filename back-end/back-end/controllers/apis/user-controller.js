const bcrypt = require('bcryptjs')
const { User } = require('../../models')
const jwt = require('jsonwebtoken')

const userServices = require('../../services/user-services')

const userController = {
  signUpPage: (req, res) => {
    res.render('signup')
  },
  signInPage: (req, res) => {
    res.render('signin')
  },
  logout: (req, res) => {
    req.flash('success_messages', '登出成功！')
    req.logout()
    res.redirect('/signin')
  },
  signIn: (req, res, next) => {
    try {
      const userData = req.user.toJSON()
      delete userData.password
      // 簽發 JWT，效期為 30 天
      const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: '30d' })
      res.json({
        status: 'success',
        data: {
          token,
          user: userData
        }
      })
    } catch (err) {
      next(err)
    }
  },
  signUp: (req, res, next) => {
    try {
      const userData = req.body

      // 如果兩次輸入的密碼不同, 就建立一個 Error 物件並拋出
      if (userData.password !== userData.passwordCheck) throw new Error('Passwords do not match!')

      // 確認資料裡面沒有一樣的 account, 若有一樣的 account, 就建立一個 Error 物件並拋出
      User.findOne({ where: { account: userData.account } })
        .then(user => {
          if (user) throw new Error('Account already exists!')
          return bcrypt.hash(userData.password, 10)
        })
        .then(hash => User.create({
          account: userData.account,
          name: userData.name,
          tel: userData.tel,
          email: userData.email,
          password: hash,
          description: userData.description,
          is_admin: 0,
          image: userData.image
        }))
        .then(user => {
          res.json({
            status: 'success',
            data: user
          }) // 顯示成功訊息
        })
    } catch (err) { next(err) } // 接住前面拋出的錯誤，呼叫專門做錯誤處理的 middleware
  },
  getUsers: (req, res, next) => {
    userServices.getUsers(req, (err, data) => err ? next(err) : res.json(data))
  },
  getCurrentUser: (req, res, next) => {
    try {
      const userData = req.body

      res.json({
        status: 'success',
        data: userData
      }) // 顯示成功訊息
    } catch (err) { next(err) } // 接住前面拋出的錯誤，呼叫專門做錯誤處理的 middleware
  }
}

module.exports = userController
