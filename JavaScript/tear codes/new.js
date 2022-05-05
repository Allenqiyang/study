function myNew(){
    //把构造函数拿出来
    let constructor = Array.prototype.shift.apply(arguments)
    //如果不是函数就报错
    if(typeof constructor !== 'function'){
        console.error('wrong')
        return
    }
    // 创建一个新对象，将对象的原型指向构造函数的prototype
    let newObj = Object.create(constructor.prototype)
    // 将this指向创建的新对象，执行构造函数代码
    let result = constructor.apply(newObj,arguments)
    // 判断是否为非空对象
    let flag = result && (typeof result === 'object' || typeof result === 'function')
    return flag ? result : newObj
}

/* myNew(构造函数,参数) */
