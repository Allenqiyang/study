// 运行node命令时在后面跟参数会传递到argv属性中
// node index Allen 18
console.log(process.argv[2])  // Allen
console.log(process.argv[3])  // 18

process.argv.forEach(item => {
  console.log(item)
})