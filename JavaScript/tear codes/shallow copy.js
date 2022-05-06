function shallowCopy(object) {
    if(!object || typeof object !== 'object') return
    let newObj = Array.isArray(object) ? [] : {}
    for(let key in object) {
        if(object.hasOwnProperty(key)) {
            newObj[key] = object[key]
        }
    }
    return newObj
}