
function setinterval(fn, timeout) {
    let context = this
    setTimeout(() => {
        fn.call(context)
        setinterval(fn, timeout)
    }, timeout);
}

function sayHello() {
    console.log('Hello')
}

setinterval(sayHello, 1000)