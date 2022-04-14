// 描述一个对象的类型
type myType = {
    name: string,
    age: number
}

/* 
    接口用来定义一个类结构,用来定义一个类中应该包含哪些属性和方法
    同时接口也可以当成类型声明使用
    接口可以重复声明
*/
interface myInterface{
    name: string
    age: number
}

interface myInterface{
    gender: string
}

const obj: myInterface = {
    name: 'sss',
    age: 111,
    gender: 'male'
}

/* 
    接口可以在定义类的时候限制类的结构
    接口中的所有属性都不能有实际的值
    接口只定义对象的结构，而不考虑实际值
    接口中所有的方法都是抽象方法
*/

interface yeah{
    name:string
    sayHello():void
}

// 定义类时，可以使类去实现一个接口
// 实现接口就是使类满足接口的要求
class myClass implements yeah{
    name: string
    constructor(name:string){
        this.name = name
    }
    sayHello(){
        console.log("Hello")
    }
}