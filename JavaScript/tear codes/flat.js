function flat(array) {
    while(array.some(item => Array.isArray(item))) {
        array = [].concat(...array)
    }
    return array
}

console.log(flat([1,2,[3,4,[5,6]]]))