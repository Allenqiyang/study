const fs = require('fs')

// 文件写入
const content = "Hello Allen"
fs.writeFile('./test.txt', content, {flag: 'a'}, err => console.log(err))

// 文件读取
fs.readFile('./test.txt', {encoding: 'utf-8'}, (err, data) => {
  console.log(data)
})

