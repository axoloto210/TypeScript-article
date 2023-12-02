# 配列の分割代入
配列についても分割代入が使用可能です。
オブジェクトの場合と同じで型注釈をつけることはできず、型推論のみによって型が決定されます。
```
const arr = ["hello", 123, true]

const [foo, bar] = arr

console.log(bar) //123
```

オブジェクトの分割代入と組み合わせることで、簡潔に値を取り出せます。
```
const arr = ["hello", 123, true]
const [foo, bar] = arr

const obj = { foo, arr }

const {
  arr: [x, y],
} = obj

console.log(x) //hello
console.log(y) //123
```

配列の中にオブジェクトが含まれている場合に、そのオブジェクトの一部だけを取り出すのに使うこともできます。
```
const arrayObj = [{ a: 1, b: 2 }, { c: 3 }]
const [{b},{c}] = arrayObj

console.log(b) //2
console.log(c) //3
```