const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

// 避免跨域問題，先設定任何請求都可以進入 *,
// origin: "http://localhost:8081"
const corsOptions = {
  origin: "*"
}
app.use(cors(corsOptions))

// parse request of content-type - application/json
app.use(bodyParser.json())

// parse request of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// simple route
app.get("/", (req, res) => {
  res.json({ message: "鈦坦考勤系統後端" })
})

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}!`)
})

const db = require("./app/models");
db.sequelize.sync();