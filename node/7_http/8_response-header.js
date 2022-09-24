const http = require('http')

// 创建一个web服务器
const server = http.createServer((req, res) => {
  // 设置响应头
  // res.setHeader("Content-Type", "text/plain")
  res.writeHead(200, {
    "Content-Type": "text/html;charset=utf-8"
  })
  
  // 响应结果
  res.end('<h2>Hello world</h2>')
})

// 启动服务器并指定端口号和主机名
server.listen(8080, 'localhost', () => {
  console.log('server started🚀')
})