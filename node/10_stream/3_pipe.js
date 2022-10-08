const fs = require('fs')

// fs.readFile('./foo.txt', (err, data) => {
//   fs.writeFile('./bar.txt', data, (err) => {
//     console.log(err)
//   })
// })

const reader = fs.createReadStream("./foo.txt")
const writer = fs.createWriteStream("./bar.txt")

reader.pipe(writer)
writer.close()