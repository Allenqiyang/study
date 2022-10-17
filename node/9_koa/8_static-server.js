const Koa = require('koa')
const staticAssets = require('koa-static')

const app = new Koa()

app.use(staticAssets('./dist'))

app.listen('8000', () => {
  console.log('static server starts🚀')
})