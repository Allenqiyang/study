const http = require('http')
const qs = require('querystring')
const url = require('url')

const server = http.createServer((req, res) => {
  // console.log(req.url)
  // console.log(req.method)
  // console.log(req.headers)

  // if(req.url === '/user') {
  //   res.end('User list')
  // } else if(req.url === '/login') {
  //   res.end('Welcome')
  // } else {
  //   res.end('Error, check again')
  // }

  // /login?username=Allen&password=1234
  const {pathname, query} = url.parse(req.url)
  if(pathname === '/login') {
    console.log(query)
    console.log(qs.parse(query))
    const {username, password} = qs.parse(query)
    console.log(username, password)
    res.end('login success')
  }

  // res.end('Hello server')
})

server.listen(8080, '0.0.0.0', () => {
  console.log('server started🚀')
})