interface IPerson {
  name: string
  age: number
  score: number
}

// const p: IPerson = {
//   name: "Allen",
//   age: 18,
//   score: 100,
//   height: 170
// }

const info = {
  name: "Allen",
  age: 18,
  score: 100,
  height: 170
}

// 这样来赋值会把多余的属性给擦除
const p: IPerson = info

function printInfo(person: IPerson) {
  console.log(person)
}

const per = {
  name: "Tony",
  age: 15,
  score: 100,
  height: 170
}

// 这样也不会报错
printInfo(per)