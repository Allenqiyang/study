// interface可以重复定义,最终会合并
interface Allen {
  name: string
}

interface Allen {
  age: number
}

const person: Allen = {
  name: "Allen",
  age: 18
}

// type不能重复定义
type IBar = {
  name: string
}

// type IBar = {
//   age: number
// }