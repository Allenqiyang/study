class Person {
  // 只读属性只能在构造器中赋值,赋值之后不可修改
  readonly name: string
  constructor(name: string) {
    this.name = name
  }
}

const p = new Person('Allen')
// p.name = 'tony'    Cannot assign to 'name' because it is a read-only property

export {}