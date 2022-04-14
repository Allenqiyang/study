(function(){
    class Animal{
        name: string
        constructor(name: string){
            this.name = name
        }
        sayHello(){
            console.log("Hello!")
        }
    }

    class Dog extends Animal{
        age: number
        constructor(name: string, age: number){
            // 如果在子类中写构造函数，在子类构造函数中必须对父类中的构造函数调用
            super(name)     // 调用父类构造函数
            this.age = age
        }
        sayHello(){
            // 在类的方法中super表示当前类的父类
            // super.sayHello()
            console.log("bark")
        }
    }

    const dog = new Dog('wangcai',3)
    dog.sayHello()
})()