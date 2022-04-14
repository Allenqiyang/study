/* 
    在定义函数或是类时，如果遇到类型不明确就可以使用泛型
*/

function fn<T>(a:T):T {
    return a
}

//直接调用具有泛型的函数
let result = fn(10)     //不指定泛型，TS会自动判断
let result2 = fn<string>('hello')   //指定泛型

function fn2<T,K>(a:T, b:K):T{
    console.log(b)
    return a
}
fn2<number,string>(123,'hello')

interface Inter{
    length: number
}
function fn3<T extends Inter>(a: T): number{    //T是泛型，Inter实现类
    return a.length
}
fn3('hello')    //要有length属性

class MyClass<T>{
    name:T
    constructor(name:T){
        this.name = name
    }
}
const mc = new MyClass<string>("yeah")