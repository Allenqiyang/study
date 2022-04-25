class Phone{
    get price(){
        console.log("price is read")
        return 1000
    }

    set price(newValue){
        console.log("price is set")
    }
}

const p = new Phone()
p.price = 2000
console.log(p.price)