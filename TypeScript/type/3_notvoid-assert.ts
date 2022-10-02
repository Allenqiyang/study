function printMessage(message?:string) {
  // if(message) {
  //   console.log(message.length)
  // }
  console.log(message!.length)      // 加一个感叹号，表示某个标识符是有值的
}

printMessage('hello')
printMessage('typescript')