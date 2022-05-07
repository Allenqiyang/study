Function.prototype.mybind = function(context, ...args) {
    (...newArgs) => this.apply(context, [...args, ...newArgs])
}

const per = {
    name: 'Allen'
}
function say(word) {
    console.log(this.name + word)
}
const sayBind = say.mybind(per, 'is')
sayBind('smart')
