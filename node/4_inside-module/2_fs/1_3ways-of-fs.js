const fs = require('fs')

const filepath = './test.txt'

// 同步操作
const file = fs.statSync(filepath)
console.log(file)
console.log("code after read file")

// 异步操作
fs.stat(filepath, (err, info) => {
  if(err) {
    console.log(err)
    return
  }
  console.log(info)
})
console.log("code after read file")

// Promise操作
fs.promises.stat(filepath).then(res => {
  console.log(res)
}).catch(err => console.log(err))
console.log("code after read file")
