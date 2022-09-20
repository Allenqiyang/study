const http = require('http')

// 创建一个web服务器
const server = http.createServer((req, res) => {
  res.end('Hello Server')
})

// 启动服务器并指定端口号和主机名
server.listen(8080, 'localhost', () => {
  console.log('server started🚀')
})