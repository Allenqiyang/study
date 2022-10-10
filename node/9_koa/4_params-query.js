const Koa = require('koa')

const app = new Koa()
const userRouter = require('./router/user')

// /users/123?name=Allen&age=18
userRouter.get('/:id', (ctx, next) => {
  console.log(ctx.request.params)   // { id: '123' }
  console.log(ctx.request.query)    // { name: 'Allen', age: '18' }
})

// app.use((ctx, next) => {
//   console.log(ctx.request.url)
//   console.log(ctx.request.query)
//   console.log(ctx.request.params)
//   ctx.response.body = "Hello World"
// })

app.use(userRouter.routes())

app.listen(8000, () => {
  console.log('koa server started🚀')
})