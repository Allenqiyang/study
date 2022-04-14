"use strict";
(function () {
    /*
        以abstract开头的类是抽象类
        抽象类和其他类区别不大，知识不能用来创建对象
        抽象类就是专门用来被继承的类
    */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log("bark");
        }
    }
    const dog = new Dog('wangcai');
    dog.sayHello();
})();
