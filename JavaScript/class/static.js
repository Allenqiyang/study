class Person{
    static name = 'Allen'
    static say(){
        console.log("Hello world!")
    }
}

let Allen = new Person()
console.log(Allen.name)     // undefined
console.log(Person.name)    // "Allen"