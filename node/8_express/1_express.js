const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
  res.end('Hello Express')
})

app.post('/', (req, res, next) => {
  res.end('Post Express')
})

app.post('/login', (req, res, next) => {
  res.end('welcome login')
})

app.listen(8000, () => {
  console.log('express server started🚀')
})