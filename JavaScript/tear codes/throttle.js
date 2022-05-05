// 防抖
function debounce(func, delay) {
    let timer = null
    return function() {
        let context = this, args = arguments
        // 如果还有定时器,那就重新计时
        if(timer) {
            clearTimeout(timer)
            timer = null
        }
        // 设置定时器，在指定时间间隔后执行事件
        timer = setTimeout(() => {
            func.apply(context, args)
        }, delay)
    }
}

// 节流
function throttle(func, delay) {
    let curTime = Date.now()
    return function() {
        let context = this, args = arguments, nowTime = Date.now()
        // 若两次时间间隔超过了指定时间，就执行函数
        if(nowTime - curTime > delay) {
            curTime = Date.now()
            return func.apply(context, args)
        }
    }
}
