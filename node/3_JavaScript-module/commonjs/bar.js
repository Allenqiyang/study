const name = "Allen"
const age = 18

let message = "hello node"

function sayHello(name) {
  console.log("Hello " + name)
}

exports.name = name
exports.age = age
exports.sayHello = sayHello