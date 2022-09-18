import path from "path"

const baseUrl = '../User/Allen/file'
const filename = 'test.txt'

const filepath = path.resolve(baseUrl, filename)
console.log(filepath)