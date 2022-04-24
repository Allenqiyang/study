// ES5类的写法
function Phone(brand, price) {
    this.brand = brand
    this.price = price
}

Phone.prototype.call = function () {
    console.log("IOS Phone call")
}

const Apple = new Phone("Apple", 5000)
Apple.call()
console.log(Apple)

// ES6类的写法
class SmartPhone {
    constructor(brand, price) {
        this.brand = brand
        this.price = price
    }

    call() {
        console.log("MI Phone call")
    }
}

const Xiaomi = new SmartPhone("Xiaomi", 5000)
Xiaomi.call()
console.log(Xiaomi)