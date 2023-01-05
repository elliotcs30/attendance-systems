if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

const flash = require('connect-flash')
const session = require('express-session')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

const passport = require('./config/passport')
const SESSION_SECRET = 'secret'

// cors 的預設為全開放
app.use(cors())
app.use(express.urlencoded({ extended: true }))

const { pages, apis } = require('./routes')

// 註冊 Handlebars 樣板引擎，並指定副檔名為 .hbs
app.engine('hbs', handlebars({ extname: '.hbs' }))
// 設定使用 Handlebars 做為樣板引擎
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(session({ secret: SESSION_SECRET, resave: false, saveUninitialized: false }))

app.use(passport.initialize()) // 初始化 Passport
app.use(passport.session()) // 啟動 session 功能

app.use(flash()) // 掛載套件
app.use((req, res, next) => {
  // 設定 success_msg 訊息
  res.locals.success_messages = req.flash('success_messages')
  // 設定 warning_msg 訊息
  res.locals.error_messages = req.flash('error_messages')
  res.locals.user = req.user
  next()
})

app.use('/api', apis)
app.use(pages)

app.listen(port, () => {
  console.info(`Example app listening on port ${port}!`)
})

module.exports = app
