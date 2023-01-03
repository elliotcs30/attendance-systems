# README

1. Fork
2. git clone

## 初始化
### Initialize
```
git remote add upstream https://github.com/elliotcs30/attendance-systems.git
# 建立上游連線
npm install
```

### 設定資料庫
需要與 config/config.json 一致

```
create database attendance_system;
```

### 執行測試
```
npm run test   # 直到綠燈全亮
```

## 執行專案
```
npm run dev
```

## 測試帳號

可使用下面 2 組測試帳號來執行專案：

| role  | account | password |
| ----- | ------- | -------- |
| admin | admin   | tiadmin  |
| user  | user1   | titaner  |