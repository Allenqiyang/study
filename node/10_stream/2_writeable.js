const fs = require('fs')

// fs.writeFile("./foo.txt", "Hello Stream", {flag: "a"}, (err) => {
//   console.log(err)
// })

const writer = fs.createWriteStream('./foo.txt', {
  flags: "a",
  start: 4
})

writer.write('Yeah', (err) => {
  if(err) {
    console.log(err)
    return
  }
  console.log("write success")
})

writer.close()

writer.on("close", () => {
  console.log("writer end")
})