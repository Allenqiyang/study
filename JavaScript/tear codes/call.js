Function.prototype.mycall = function(context, ...rest) {
    // 判断传入的context是否存在，如果不存在就设置为window
    context = context || window
    // context是我们想要函数绑定的执行上下文，而这里的this是调用mycall的函数
    // 这样就是当前的context调用目标函数了
    context.fn = this
    const result = context.fn(...rest)
    delete context.fn
    return result
}

let obj = {
    name: 'Allen'
}
function test(arg1, arg2, arg3) {
    console.log(this.name)      // Allen
    console.log(arg1, arg2, arg3)   // 1 2 3
}
test.mycall(obj, 1, 2, 3)