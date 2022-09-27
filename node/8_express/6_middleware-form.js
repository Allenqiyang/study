const express = require('express')
const multer = require('multer')

const app = express()

const upload = multer()

// any()会生成一个函数，可以用该函数作为中间件用来解析form-data类型的数据
app.use(upload.any())

app.post('/login', (req, res, next) => {
  console.log(req.body)
  res.end('login success')
})

app.listen(8000, () => {
  console.log('form-data started parsing')
})