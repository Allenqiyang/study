const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  // ctx.response.body = "Hello World"
  ctx.response.body = ['Allen', 'Tony', 'Happy']
  // 也可以直接这样写，相当于执行了ctx.response.body = ""
  // ctx.body = "Hello Koa"

  ctx.status = 301
})

app.listen(8000, () => {
  console.log('koa server started🚀')
})