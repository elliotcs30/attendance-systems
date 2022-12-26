# attendance-systems

ALPHA Camp | 考勤打卡專案 | 前後端分離

# Feature

- signup / signin / signout
  - 除了註冊和登入頁，使用者一定要登入才能使用網站
  - 當使用者尚未註冊便試圖登入時，會有錯誤提示
  - 使用者能編輯自己的密碼
  - 使用者登入密碼錯誤 5 次上鎖
  - 註冊時，account 和 email 不能與其他人重複，若有重複會跳出錯誤提示
  - 編輯時，account 和 email 不能與其他人重複，若有重複會跳出錯誤提示
- User
  - 使用者有按鈕可以打卡
  - 使用者能瀏覽自己的打卡記錄
- Admin

  - 管理者可以瀏覽站內所有的使用者清單
  - 管理者可以瀏覽

- calendar

  - 出缺勤僅計算工作日(根據台灣行事曆)

- Attendance management

  - 上班打卡一次，下班打卡一次，未滿 8 小時為缺勤
    - 第一次打卡是上班時間
    - 當天第二次打卡當成下班時間，若多次打卡，最後一次打卡當成下班時間
    - 當天若只打卡一次，一樣視作出勤異常
  - 換日時間為上午五點(GMT+8)
  - QR code 也可以打卡 - 意思是 QR code 會隨著每個人、每天變化，可以掃碼直接打卡
  - GPS 驗證打卡 (只能在公司使用) - 如果 GPS 驗證，登入跟 QR code 都必須要在指定的公司地點附近 400 公尺內

- 優化
  - admin 要有後台可以看 (admin 帳號固定 admin / tiadmin)
  - HR 要是 admin 有不同功能，列出缺勤使用者的帳號
  - admin 可以清除缺勤狀態，改為出勤
  - 有通知功能給 admin 有人帳號上鎖
  - 有通知功能給 admin 今天未打卡的人有誰 (optional)
  - Unit test
  - Integration test
  - Optional - Continuous Integration

# Environment settings

1. Install Node.js [reference](https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac)

```
  npm i node
  node -v
  nvm use 16 (MAC OS M1-Pro chip)
```

2. MySQL

Downloads MySQL and install [Downloads](https://dev.mysql.com/downloads/mysql/)

Setting MySQL [reference](https://siddharam.com.tw/post/20190807/)

```
  create database as;
```

3. windows environment need install file

```shell
  npm install cross-env
```

## Getting Start

1. git clone the project

```shell
  git clone https://github.com/elliotcs30/attendance-systems.git
```

2. Install the required dependencies

```shell
  $ npm install
```

3. Set environment variables in .env file according to .env.example

```shell
  touch .env
```

4. Seed create your database

```shell
  $ npm run dbinit
  $ npm run seedinit
```

5. Start the front end server

```shell
  $ cd front-end
  $ npm run serve
```

6. Start the back end server

```shell
  $ npm run start         // for mac
  $ npm run start-windows // for windows
```

7. Execute successfully if seeing following message

```shell
  Example app listening on port 3000!
```

### 測試帳號：

可使用下面 2 組測試帳號來執行專案：

| role  | account | password |
| ----- | ------- | -------- |
| admin | admin   | tiadmin  |
| user  | user1   | titaner  |

### 開發者

| name   | account                       |
| ------ | ----------------------------- |
| Elliot | https://github.com/elliotcs30 |
