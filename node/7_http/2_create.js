const http = require('http')

const server = http.createServer((req, res) => {
  res.end('Hello Server1')
})

// server.listen(8080, 'localhost', () => {
//   console.log('server1 started🚀')
// })

// const server2 = http.createServer((req, res) => {
//   res.end('Hello Server2')
// })

// server2.listen(8081, 'localhost', () => {
//   console.log('server2 started🚀')
// })

const server2 = new http.Server((req, res) => {
  res.end('Hello server2')
})

server2.listen(8081, 'localhost', () => {
  console.log('server2 started🚀')
})

// 不传会默认来一个未使用的端口号
server.listen(() => {
  console.log('server1 started🚀')
  console.log(server.address().port)
})