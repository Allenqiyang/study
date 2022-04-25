class Phone{
    constructor(brand, price) {
        this.brand = brand
        this.price = price
    }
    call(){
        console.log("phone call")
    }
}

class SmartPhone extends Phone{
    constructor(brand, price, color, size) {
        super(brand, price)     // 调用父类的constructor方法
        this.color = color
        this.size = size
    }
    photo(){
        console.log("take photo")
    }
    call(){     //可以对父类的方法进行重写
        console.log("SmartPhone call")
    }
}

const Apple = new SmartPhone("Apple",5000,"white",6.1)
console.log(Apple)
Apple.call()    // phone call
Apple.photo()   //take photo