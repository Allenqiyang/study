function sum<Type>(num1: Type): Type {
  return num1
}

sum<number>(100)
sum<{name: string}>({name: "Allen"})
sum<any[]>([123, 456])

// 也可以类型推导
sum(50)