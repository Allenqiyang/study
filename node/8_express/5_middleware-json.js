const express = require('express')

const app = express()

// 一个专门针对json数据进行解析的中间件
app.use((req, res, next) => {
  if(req.headers['content-type'] === 'application/json') {
    req.on('data', data => {
      console.log(data.toString())
      const info = data.toString()
      req.body = info
      // 注意想要传给后面的中间件不要用next()传参数，如果next函数传了参数表示出错
    })

    req.on('end', () => {
      next()
    })
  } else {
    next()
  }
})

// 可以调用express.json(),该函数会返回针对json解析的函数，用该函数作为中间件
// app.use(express.json())

// 这个返回一个专门解析x-www-form-urlencoded数据的函数
app.use(express.urlencoded({extended: true}))
// 里面需要传一个参数，extended，当它为true，对urlencoded解析使用第三方库qs
// 若为false使用node内置的querystring


// 正常对请求进行解析每次都要写的话太麻烦了，所以可以抽离出一个中间件来用
// app.post('/login', (req, res, next) => {
//   req.on('data', data => {
//     console.log(data.toString())
//   })

//   req.on('end', () => {
//     res.end('login success')
//   })
// })

app.post('/login', (req, res, next) => {
  console.log(req.body)
  res.end('login success')
})

app.post('/products', (req, res, next) => {
  console.log(req.body)
  res.end('products uploaded')
})

app.listen(8000, () => {
  console.log('normal middleware')
})