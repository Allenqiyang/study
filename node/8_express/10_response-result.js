const express = require('express')

const app = express()

app.get('/login', (req, res, next) => {
  console.log(req.query)

  res.status(204)

  // res.type('application/json')
  // res.end(JSON.stringify({name: "Allen", age: 18}))
  res.json({name: "Allen", age: 18})
})

app.listen(8000, () => {
  console.log('response server start')
})