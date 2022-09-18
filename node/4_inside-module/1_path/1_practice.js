const path = require('path')

const baseUrl = 'C:/Allen/File'
const filename = 'file.txt'

const filePath = path.resolve(baseUrl, filename)
console.log(filePath)

