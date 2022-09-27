const express = require('express')
const userRouter = require('./routers/user')
const productRouter = require('./routers/products')

const app = express()

app.use('/users', userRouter)
app.use('/products', productRouter)

app.listen(8000, () => {
  console.log('router server start')
})