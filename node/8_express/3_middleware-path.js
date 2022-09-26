const express = require('express')

const app = express()

// 注册一个路径中间件
app.use('/home', (req, res, next) => {
  console.log('home middleware1')
  next()
})

app.use('/home', (req, res, next) => {
  console.log('home middleware2')
  res.end('get home success')
})

app.listen(8000, () => {
  console.log('normal middleware')
})