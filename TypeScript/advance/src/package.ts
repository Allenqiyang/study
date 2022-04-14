(function (){
    class Person{
        /* 
            public修饰的属性可以在任意位置访问(修改)    默认都是public
            private 私有属性，只能在类的内部进行访问(修改)
            - 通过在类中添加方法使得私有属性可以被外部访问
            protected 受保护的属性，只能在当前类和当前类的子类中访问
        */
        private _name: string
        private _age: number
        constructor(name: string, age: number){
            this._name = name
            this._age = age
        }

        /* getName(){
            return this.name
        }
        getAge(){
            return this.age
        }
        // 通过方法来设置类中的值
        setName(name: string){
            this.name = name
        }
        setAge(age: number){
            if(age > 0){
                this.age = age
            }
        } */

        get name(){
            console.log("get is running")
            return this._name
        }
        set name(value: string){
            this._name = value
        }
        get age(){
            return this._age
        }
        set age(value: number){
            if(value > 0){
                this._age = value
            }
        }
    }

    class A{
        protected num: number
        constructor(num: number){
            this.num = num
        }
    }
    class B extends A{
        test(){
            console.log(this.num)
        }
    }
    const b = new B(123)
    // b.num = 100   这样子是访问不了的
    b.test()

    const per = new Person('Allen',18)
    per.name = 'Tony'
    per.age = 15
    console.log(per)
})()