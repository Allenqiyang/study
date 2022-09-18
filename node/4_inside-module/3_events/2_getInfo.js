const Eventemitter = require('events')

const emitter = new Eventemitter()

const listener1 = (...args) => {
  console.log(args)
}
emitter.on('click', listener1)
const listener2 = (...args) => {
  console.log(args)
}
emitter.on('click', listener2)

emitter.on('tab', (args) => console.log(args))

console.log(emitter.eventNames())   // 注册的事件名
console.log(emitter.listenerCount('click'))   // 该事件监听函数的个数
console.log(emitter.listeners('click'))     // 列举该事件的监听函数
