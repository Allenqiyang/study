// type Person = {
//   name: string,
//   age: number
// }

interface Person {
  name: string
  age: number
}

const p: Person = {
  name: "Allen",
  age: 18
}

console.log(p.name)
console.log(p.age)

export {}