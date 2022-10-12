const Koa = require('koa')
const Router = require('koa-router')
const multer = require('koa-multer')

const app = new Koa()
const uploadRouter = new Router({prefix: '/upload'})

const upload = multer({
  dest: './uploads/'
})

uploadRouter.post('/avatar', upload.single('avatar'), (ctx, next) => {
  console.log(ctx.req.file)
  ctx.response.body = 'upload success'
})

app.use(uploadRouter.routes())

app.listen(8000, () => {
  console.log('koa server started🚀')
})