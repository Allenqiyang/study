const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const multer = require('koa-multer')

const app = new Koa()

const upload = multer()

// 不论是json数据还是urlencoded都可以解析， 但是form-data不可以
app.use(bodyParser())
app.use(upload.any())

app.use((ctx, next) => {
  console.log(ctx.request.body)
  // console.log(ctx.req.body)  form-data的数据要在req里面取出而不是request
  ctx.response.body = "Hello World"
})

app.listen(8000, () => {
  console.log('koa server started🚀')
})