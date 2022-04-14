// 使用class关键字定义一个类
class Person {

    // 定义实例属性
    name: string = 'Allen'
    readonly age: number = 18

    //在属性前使用static关键字可以定义类属性(静态属性)
    static gender: string = 'male'

    // 若是静态属性要readonly那要写在static后面    static readonly gender

    sayHello(){     // 方法也可以加static,变成类方法，直接通过类调用
        console.log('Hello!')
    }
}

const per = new Person()
console.log(per)

console.log(Person.gender)

per.name = 'Tony'
console.log(per.name)
// per.age = 15     //readonly cannot be changed

per.sayHello()