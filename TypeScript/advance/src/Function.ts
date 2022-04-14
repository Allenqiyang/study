class Dog{
    name: string
    age: number

    // constructor 构造函数
    // 构造函数会在对象创建时调用
    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    bark(){
        alert('bark!')
    }
}

const dog1 = new Dog('white',2)
const dog2 = new Dog('black',3)

console.log(dog1)
console.log(dog2)