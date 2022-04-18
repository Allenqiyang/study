### this
#### 1. 普通函数
   解析器在调用函数时每次都会向函数内部传递进一个隐含的参数

   这个隐含的参数就是this,this指向的是一个对象

   这个对象是函数执行的上下文对象，调用该函数的上下文对象

   根据函数的调用方式的不同,this会指向不同的对象

- 以函数的形式调用时,this指向的是window

- 以方法的形式调用时,this指向的是调用方法的那个对象

```js
    window.color='red'
    let obj = {
        color:'blue',
        sayColor:sayColor
    }
    function sayColor(){
        console.log(this.color)
    }
    sayColor();	//'red'
    obj.sayColor	//'blue'
```

```js
    function Obj() {
        a = 1
        fun = function() {
            console.log(this)
        }
        console.log(this)   //obj
        fun()   //window
    }
    const obj = new Obj()
```

#### 2. 箭头函数
   在箭头函数中，this指向的是定义箭头函数的上下文

   当事件回调或定时回调中调用某个函数时，this指向的并非想要的对象，
   
   这时就可以将回调函数写成箭头函数便可解决问题。比如定时器
   setTimeout

```js
    window.color = 'red'
    let sayColor = () => console.log(this.color)
    let obj = {
        color: 'blue',
        sayColor:sayColor
    }
    sayColor();	//'red'
    obj.sayColor();	//'red'
```

```js
    function Obj() {
        a = 1
        fun = () => {
            console.log(this)
        }
        console.log(this)  //obj
        fun()   //obj
    }
    const obj = new Obj()
```