const message = "yeah"

// const flag = Boolean(message)
const flag = !!message
console.log(flag)

let message1: string | null = "Hello World"

const content = message1 ?? "Hello Allen"
// const content = message1 ? message1 : "Hello Allen"
console.log(content)