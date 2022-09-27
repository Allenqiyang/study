const path = require('path')

const express = require('express')
const multer = require('multer')

const app = express()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  // dest: './upload'
  storage
})

app.post('/login', (req, res, next) => {
  console.log(req.body)
  res.end('login success')
})

// 中间可以传一个函数，single表示上传单个文件，里面的参数是form的键名
app.post('/upload', upload.single('avator'), (req, res, next) => {
  console.log(req.file)
  res.end('file uploaded')
})

app.listen(8000, () => {
  console.log('form-data started parsing')
})