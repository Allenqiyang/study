"use strict";
/*
    在定义函数或是类时，如果遇到类型不明确就可以使用泛型
*/
function fn(a) {
    return a;
}
//直接调用具有泛型的函数
let result = fn(10); //不指定泛型，TS会自动判断
let result2 = fn('hello'); //指定泛型
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, 'hello');
function fn3(a) {
    return a.length;
}
fn3('hello'); //要有length属性
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new MyClass("yeah");
