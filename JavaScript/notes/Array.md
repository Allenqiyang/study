# 🎉数组方法

#### 1.Array.prototype.at

`at` 方法接收一个整数值并返回该索引的项目，允许正数和负数。负整数从数组中的最后一个项目开始倒数。返回值为给定索引的数组中的元素。如果找不到指定的索引，则返回 `undefined`

```js
const array = [5,12,8,130,44]

console.log(array.at(1))	//12

console.log(array.at(-2))	//130
```


#### 2.Array.prototype.reduce

`reduce` 方法对数组中的每个元素按序执行一个由您提供的 **reducer** 函数，每一次运行 **reducer** 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值

> 返回结果为使用reducer回调函数遍历整个数组后的结果

```js
const array = [1, 2, 3, 4]

const initialValue = 0
const result = array.reduce((pre, cur) => {
  return pre + cur
}, initialValue)
console.log(result)		// 10
```

接收2个参数：一个 reducer 函数，一个 initialValue(可选)

**reducer**函数里面可以写4个参数

- `previousValue`：上一次调用 `callbackFn` 时的返回值。在第一次调用时，若指定了初始值 `initialValue`，其值则为 `initialValue`，否则为数组索引为 0 的元素 `array[0]`
- `currentValue`：数组中正在处理的元素。在第一次调用时，若指定了初始值 `initialValue`，其值则为数组索引为 0 的元素 `array[0]`，否则为 `array[1]`
- `currentIndex`：数组中正在处理的元素的索引。若指定了初始值 `initialValue`，则起始索引号为 0，否则从索引 1 起始
- `array`：用于遍历的数组

**initialValue**	作为第一次调用 `callback` 函数时参数 previousValue 的值



### 操作方法

#### 1.Array.prototype.concat

`concat` 方法用于合并两个或多个数组。此方法不会更改现有数组，而是**返回一个新数组**。

```js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```



若`concat`中的参数是空的，那就会返回浅拷贝的一个数组

- 对象引用：`concat`将对象引用复制到新数组中。 原始数组和新数组都引用相同的对象。 也就是说，如果引用的对象被修改，则更改对于新数组和原始数组都是可见的。 这包括也是数组的数组参数的元素。
- 数据类型如字符串，数字和布尔：`concat`将字符串和数字的值复制到新数组中。

```js
const array1 = ['a', 'b',{name:'tony'}]
const array2 = [1,2,3]
const array3 = array2.concat()
const array4 = array1.concat()

console.log(array3)		//[1,2,3]

array3[0] = 5
console.log(array2)		//[1,2,3]
console.log(array3)		//[5,2,3]

console.log(array4)		//[ 'a', 'b', { name: 'tony' }]
array4[2].name = 'Allen'
console.log(array4)		//[ 'a', 'b', { name: 'Allen' }]
console.log(array1)		//[ 'a', 'b', { name: 'Allen' }]
```

`concat`还会把数组扁平化（当连接的内容是参数列表而不是数组才会打平，而且只有一层）

```js
let array1 = [1,2,3]
let array2 = array1.concat(4,5,[6,7])
console.log(array2)		//[1,2,3,4,5,6,7]
```



#### 2.Array.prototype.slice

`slice` 方法**返回一个新的数组对象**，这一对象是一个由 `begin` 和 `end` 决定的原数组的**浅拷贝**（包括                                         `begin`，不包括`end`）。原始数组不会被改变

若只有一个参数，slice会返回该索引到数组末尾的所有元素，返回该索引到数组末尾的所有元素。若有两个参数，就返回从开始索引到结束索引对应的所有元素

```js
let array = [1,2,3,4,5,6]

console.log(array.slice())		//[1,2,3,4,5,6]
console.log(array.slice(2))		//[3,4,5,6]
console.log(array.slice(2,4))	//[3,4]
console.log(array.slice(-2))	//[5,6]
console.log(array.slice(2,-1))	//[3,4,5]
```



#### 3.Array.prototype.splice

`splice`方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组

参数： start修改开始位置、deleteCount移除的数组元素个数、item1，item2...要添加进数组的元素

- 删除	给 splice 传2个参数：要删除的第一个元素的位置和要删除的数量
- 插入	传3个参数：开始位置、0（删除数量）和要插入的元素
- 替换	传3个参数：开始位置、要删除的元素数量和要插入的任意多个元素

> 该方法的返回值是从数组中被删除的元素所组成的数组

```js
let colors = ['red', 'green', 'blue']

let remove = colors.splice(0,1)
console.log(colors)     //['green', 'blue']
console.log(remove)     //['red']

remove = colors.splice(1,0,'yellow')
console.log(colors)     //['green', 'yellow', 'blue']
console.log(remove)     //[]

remove = colors.splice(1,1,'orange')
console.log(colors)     //['green', 'orange', 'blue']
console.log(remove)     //['yellow']
```



### 迭代方法

每个方法接收两个参数：函数，函数的this

传给方法的函数接收3个参数：数组元素、元素索引、数组本身



#### 1. Array.prototype.every

对数组的每一项都运行传入的函数，如果 **每一项** 函数都返回true，那这个方法返回true

> 若收到一个空数组，任何情况都返回true

```js
const nums = [1, 2, 3, 4, 5, 4, 3, 1]

const everyResult = nums.every((item, index, array) => item > 2)
console.log(everyResult)	//false
```



#### 2. Array.prototype.some

对数组的每一项都运行传入的函数，如果 **有一项** 函数都返回true，那这个方法返回true

> 若收到一个空数组，任何情况都返回false

```js
const nums = [1, 2, 3, 4, 5, 4, 3, 1]

const someResult = nums.some((item, index, array) => item > 2)
console.log(someResult)		//true
```



#### 3. Array.prototype.filter

对数组的每一项都运行传入的函数，**返回一个新数组**，由所有通过测试函数（函数返回true）的项组成

```js
const nums = [1, 2, 3, 4, 5, 4, 3, 1]

const filterResult = nums.filter((item, index, array) => item > 2)
console.log(filterResult)		//[3, 4, 5, 4, 3]
```
接收2个参数：一个callback函数，还有用于执行callback函数时的this值(可选)

回调函数可写3个参数，element，index，array


#### 4. Array.prototype.find
`find` 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 `undefined`

```js
const nums = [5, 12, 8, 130, 44]

const found = nums.find(num => num > 10)

console.log(found)    // 12
```



#### 5. Array.prototype.map

对数组的每一项都运行传入的函数，**返回一个新数组**，由每一项调用函数的结果（返回值）组成

（该方法不会改变原数组，但是callback中可以改变，比如直接操作 array[index] ）

```js
const nums = [1, 2, 3, 4, 5, 4, 3, 1]

const mapResult = nums.map((item, index, array) => item * 2)
console.log(mapResult)		//[2, 4, 6, 8, 10, 8, 6, 2]
```



#### 6. Array.prototype.forEach

对数组的每一项都运行传入的函数，没有返回值

```js
const nums = [1, 2, 3];

nums.forEach(item => console.log(item))

// expected output: 1
// expected output: 2
// expected output: 3
```



