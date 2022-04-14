"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
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
        get name() {
            console.log("get is running");
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value > 0) {
                this._age = value;
            }
        }
    }
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(123);
    // b.num = 100   这样子是访问不了的
    b.test();
    const per = new Person('Allen', 18);
    per.name = 'Tony';
    per.age = 15;
    console.log(per);
})();
