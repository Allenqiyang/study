interface CalcFn {
  (arg1: number, arg2: number): number
}

function calc(num1: number, num2: number, calcFn: CalcFn) {
  return calcFn(num1, num2)
}

const add: CalcFn = (num1: number, num2: number) => {
  return num1 + num2
}

console.log(calc(20, 30, add))