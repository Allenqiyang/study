const express = require('express')

const app = express()

// /products/12345/iphone
app.get('/products/:id/:name', (req, res, next) => {
  console.log(req.params)     // {id:'123', name:'iphone'}
  res.end('data of products')
})

// /login?username=Allen&password=123456
app.get('/login', (req, res, next) => {
  console.log(req.query)    // {username:'Allen', password:'123456'}
  res.end('login success')
})

app.listen(8000, () => {
  console.log('server of products start')
})