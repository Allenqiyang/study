function myInstanceof(instance, Function){
    //获取对象的原型
    let proto = Object.getPrototypeOf(instance)
    //获取构造函数的prototype对象
    let prototype = Function.prototype

    //判断构造函数的prototype对象是否在对象的原型链上
    while(true){
        if(!proto) return false
        if(proto === prototype) return true
        //若没有找到，就继续从其原型上找，Object.getPrototypeOf获取指定对象的原型
        proto = Object.getPrototypeOf(proto)
    }
}

const result = myInstanceof(2, Number)
console.log(result)
