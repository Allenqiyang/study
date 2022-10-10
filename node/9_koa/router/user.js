const Router = require('koa-router')

const router = new Router({prefix: "/users"})

router.get('/', (ctx, next) => {
  ctx.response.body = "user list"
})

router.post('/', (ctx, next) => {
  ctx.response.body = "POST request"
})

module.exports = router