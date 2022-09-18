const path = require('path')

// const filepath = '/User/Allen/test.txt'
// console.log(path.dirname(filepath))
// console.log(path.extname(filepath))
// console.log(path.basename(filepath))

const baseUrl = '../User/Allen/file'
const filename = 'test.txt'

const filepath2 = path.join(baseUrl, filename)
console.log(filepath2)

const filepath3 = path.resolve(baseUrl, filename)
console.log(filepath3)
