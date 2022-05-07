function curry(targetfn) {
  // 这个是要进行柯里化的函数的参数长度
  let length = targetfn.length

  return function fn() {
    console.log(arguments)
    // arguments是返回以后的函数的参数  比如下方例子的currySum第一个括号是1
    // 若参数个数少于要目标函数参数个数那就继续调用该函数将下一个参传入
    if(arguments.length < length) {
      return fn.bind(null, ...arguments)
    } else {
      return targetfn.apply(null, arguments)
    }
  }
}

function sum(a, b, c) {
  return a + b + c
}

const currySum = curry(sum)
console.log(currySum(1)(2)(3))