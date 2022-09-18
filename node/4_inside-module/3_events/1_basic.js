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

setTimeout(() => {
  emitter.emit('click', 'Allen', 'Tony', 'happy')
  emitter.off('click', listener2)   // 取消注册
  emitter.emit('click', 'again')
}, 1000);
