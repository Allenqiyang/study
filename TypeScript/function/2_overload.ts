// 函数的重载：函数的名称相同，但参数不同的几个函数，就是函数的重载
function add(num1: number, num2: number): number
function add(num1: string, num2: string): string

function add(num1: any, num2: any) {
  if(typeof num1 === 'string' && typeof num2 === 'string') {
    return num1.length + num2.length
  }
  return num1 + num2
}

const result1 = add(10, 20)
const result2 = add('Hello', 'World')

console.log(result1)
console.log(result2)

// 函数重载中，实现函数是不能被直接调用的
// const result3 = add({name: 'Allen'}, {age: 18})

export {}