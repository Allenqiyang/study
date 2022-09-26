const express = require('express')

const app = express()

// 路径和方法匹配的中间件
app.get('/home', (req, res, next) => {
  console.log('home path and method middleware')
  res.end('home success')
})

app.post('/login', (req, res, next) =>{
  console.log('login path and method middleware')
  res.end('login success')
})

app.listen(8000, () => {
  console.log('normal middleware')
})