const express = require('express')

const app = express()

const USER_NOT_EXIST = 'user not exist'
const USER_EXIST = 'user already exist'

app.post('/login', (req, res, next) => {
  const isLogin = true
  if(!isLogin) {
    res.json('user login success')
  } else {
    // res.status(400)
    // res.json('user does not exist')
    next(new Error(USER_NOT_EXIST))
  }
})

app.post('/register', (req, res, next) => {
  const isExist = true
  if(!isExist) {
    res.json('user register success')
  } else {
    // res.status(400)
    // res.json('user already exist')
    next(new Error(USER_EXIST))
  }
})

app.use((err, req, res, next) => {
  let statusCode = 400
  let message = ''
  
  switch(err.message) {
    case USER_NOT_EXIST:
      message = 'username does not exist'
      break
    case USER_EXIST:
      message = 'username already exist'
      break
    default:
      message = 'error, not found'
  }

  res.status(statusCode)
  res.json({
    errCode: statusCode,
    errMsg: message
  })
})

app.listen(8000, () => {
  console.log('server is on')
})