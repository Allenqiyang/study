const fs = require('fs')

// 创建文件夹
const dirname = './allen'
if(!fs.existsSync(dirname)) {
  fs.mkdir(dirname, err => {
    console.log(err)
  })
}

// 读取文件夹中的所有文件
fs.readdir(dirname, (err, files) => {
  console.log(files)
})
// 若是文件夹内还有文件夹，想读取里面的所有文件那就要递归调用了


// 文件夹重命名
fs.rename('./allen', './tony', err => console.log(err))
