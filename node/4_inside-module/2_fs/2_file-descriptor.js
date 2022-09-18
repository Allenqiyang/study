const fs = require('fs')

fs.open('./test.txt', (err, fd) => {
  if(err) {
    console.log(err)
    return
  }

  fs.fstat(fd, (err, info) => {
    console.log(info)
  })
})