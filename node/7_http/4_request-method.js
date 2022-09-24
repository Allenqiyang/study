const http = require('http')
const qs = require('querystring')
const url = require('url')

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url)

  if(pathname === '/login') {
    if(req.method === 'POST') {
      req.setEncoding('utf-8')
      req.on('data', data => {
        console.log(JSON.parse(data))
      })

      res.end('login success')
    }
  }
})

server.listen(8080, '0.0.0.0', () => {
  console.log('server started🚀')
})