const fs = require('fs')

// fs.readFile('./foo.txt', (err, data) => {
//   console.log(data)
// })

const reader = fs.createReadStream('./foo.txt', {
  start: 3,
  end: 10,
  highWaterMark: 2    // 每次读多少
})

reader.on('data', (data) => {
  console.log(data)
  reader.pause()
  setTimeout(() => {
    reader.resume()
  }, 1000)
})

reader.on('open', () => {
  console.log('the file was open')
})

reader.on('close', () => {
  console.log('the file is close')
})