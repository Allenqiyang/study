// 默认的就是public，在任何地方都可以访问
// private仅在同一类中可以访问
class Person {
  private name: string = "tony"

  getName() {
    return this.name
  }
}

const p = new Person()
// p.name    Property 'name' is private and only accessible within class 'Person'

console.log(p.getName())
