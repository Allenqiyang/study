interface ILength {
  length: number
}

function getLength<T extends ILength>(arg: T) {
  console.log(arg.length)
}

getLength("yeah")
getLength([123, 456, 789])
getLength({length: 100})