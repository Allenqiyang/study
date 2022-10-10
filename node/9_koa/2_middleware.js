const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  if(ctx.request.url === "/login") {
    if(ctx.request.method === "GET") {
      ctx.response.body = "Login Success"
    }
  } else {
    ctx.response.body = "other requests"
  }
})

// 没有提供app.get()这样的方法
// 也没有app.use("/login", () => {})

app.listen(8000, () => {
  console.log('koa server started🚀')
})