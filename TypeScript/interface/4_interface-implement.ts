interface ISwim {
  swimming: () => void
}

interface IEat {
  eating: () => void
}

const a: ISwim = {
  swimming() {

  }
}

class Animal {

}

// 继承:只能实现单继承
// 实现:实现接口,类可以实现多个接口
class Fish extends Animal implements ISwim, IEat {
  swimming() {
    console.log("fish swimming")
  }

  eating() {
    console.log("fish eating")
  }
}

class Person {
  swimming() {
    console.log("person swimming")
  }
}

function swimAction(swimable: ISwim) {
  swimable.swimming()
}

swimAction(new Fish())
swimAction(new Person())
swimAction({swimming() {}})
