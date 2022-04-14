"use strict";
// 使用class关键字定义一个类
class Person {
    constructor() {
        // 定义实例属性
        this.name = 'Allen';
        this.age = 18;
    }
    // 若是静态属性要readonly那要写在static后面    static readonly gender
    sayHello() {
        console.log('Hello!');
    }
}
//在属性前使用static关键字可以定义类属性(静态属性)
Person.gender = 'male';
const per = new Person();
console.log(per);
console.log(Person.gender);
per.name = 'Tony';
console.log(per.name);
// per.age = 15     //readonly cannot be changed
per.sayHello();
