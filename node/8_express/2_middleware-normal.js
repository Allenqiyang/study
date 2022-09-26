const express = require('express')

const app = express()

// use注册一个中间件
app.use((req, res, next) => {
  console.log('sign up middleware 1')
  next()
})

app.use((req, res, next) => {
  console.log('sign up middleware 2')
  next()
})

app.use((req, res, next) => {
  console.log('sign up middleware 3')
  res.end('Hello world')
})

app.listen(8000, () => {
  console.log('normal middleware')
})