"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log('animal sayHello');
    }
}
/* Sheep extends Animal
    此时，Animal被称为父类，Sheep被称为子类
    使用继承后，子类会拥有父类所有的方法二号属性
    通过继承可将多个类中共有的代码写在一个父类中
    如果在子类中添加和父类相同的方法，则子类方法会覆盖父类方法
*/
class Sheep extends Animal {
    run() {
        console.log(`${this.name} is running`);
    }
    sayHello() {
        console.log('mie mie mie');
    }
}
class Cow extends Animal {
    sayHello() {
        console.log('mou mou mou');
    }
}
const sheep = new Sheep('Shawn', 6);
const cow = new Cow('Niu', 5);
console.log(sheep);
console.log(cow);
sheep.run();
sheep.sayHello();
cow.sayHello();
