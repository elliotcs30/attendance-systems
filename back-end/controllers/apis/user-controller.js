const bcrypt = require('bcryptjs')
const { User } = require('../../models')
const userController = {
  signUpPage: (req, res) => {
    res.rander('signup')
  },
  signUp: (req, res, next) => {
    // 如果兩次輸入的密碼不同, 就建立一個 Error 物件並拋出
    if (req.body.password !== req.body.passwordCheck) throw new Error('Passwords do not match!')

    // 確認資料裡面沒有一樣的 account, 若有一樣的 account, 就建立一個 Error 物件並拋出
    User.findOne({ where: { account: req.body.account } })
      .then(user => {
        if (user) throw new Error('Account already exists!')
        return bcrypt.hash(req.body.password, 10) // 前面加 return
      })
      .then(hash => User.create({
        name: req.body.name,
        account: req.body.account,
        password: hash
      }))
      .then(() => {
        req.flash('success_messages', '成功註冊帳號！') // 顯示成功訊息
      })
      .catch(err => next(err)) // 接住前面拋出的錯誤，呼叫專門做錯誤處理的 middleware
  },
  signInPage: (req, res) => {
    res.render('signin')
  },
  signIn: (req, res) => {
    req.flash('success_messages', '成功登入！')
    res.redirect('/attendances')
  },
  logout: (req, res) => {
    req.flash('success_messages', '登出成功！')
    req.logout()
    res.redirect('/signin')
  },
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
