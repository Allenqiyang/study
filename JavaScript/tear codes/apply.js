Function.prototype.myapply = function(context, args) {
    context = context || window
    context.fn = this
    let result
    if(!args) {
        result = context.fn()
    } else {
        result = context.fn(...args)
    }
    delete context.fn
    return result
}

const person = {
    name: 'Allen'
}
function sayName(arg1, arg2) {
    console.log(this.name)
    console.log(arg1)
    console.log(arg2)
}
sayName.myapply(person, [1, 2])