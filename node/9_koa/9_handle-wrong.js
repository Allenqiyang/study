const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  const isLogin = false
  if(!isLogin) {
    ctx.app.emit('error', new Error('not login'), ctx)
  }
})

app.on('error', (err, ctx) => {
  ctx.status = 401
  ctx.body = err.message
})

app.listen('8000', () => {
  console.log('static server starts🚀')
})