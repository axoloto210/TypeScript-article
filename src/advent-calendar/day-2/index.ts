const arr = ["hello", 123, true]

const [foo, bar] = arr

console.log(bar) //123

const obj = { foo, arr }

const {
  arr: [x, y],
} = obj

console.log(x) //hello
console.log(y) //123

const arrayObj = [{ a: 1, b: 2 }, { c: 3 }]
const [{b},{c}] = arrayObj

console.log(b) //2
console.log(c) //3

export {}
