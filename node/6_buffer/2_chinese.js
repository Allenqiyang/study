const message = "你好啊"


// 一般来说一个中文字符占用3个buffer字节
const buffer = Buffer.from(message)

// 对字节解码，默认为utf8
console.log(buffer.toString())
