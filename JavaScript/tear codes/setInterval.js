
function setinterval(fn, timeout) {
    function inter() {
        setTimeout(inter, timeout)
        fn() 
    }
    setTimeout(inter, timeout)
}

function sayHello() {
    console.log('Hello')
}

setinterval(sayHello, 1000)