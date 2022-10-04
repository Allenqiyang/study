// 声明变量、函数、类
declare let pname: string
declare let age: number
declare let score: number

declare function sayHello(): () => void

declare class Person {
  name: string
  age: number
  constructor(name: string, age: number)
}

// 声明文件
declare module '*.jpg'
declare module '*.png'

declare module '*.vue' {
  import {DefineComponent} from 'vue'
  const component: DefineComponent
}
