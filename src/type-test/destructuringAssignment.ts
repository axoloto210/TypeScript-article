const nestedObj = {
  foo: 123,
  bar: "str",
  "1234": "1234str",
  obj: {
    x: 1,
    y: "strY",
    obj2: {
      x2: 2,
      y2: "strY2",
    },
  },
}

//識別子でない場合にも変数名を付け直すことで分割代入が可能となる。
const { foo, "1234": var1234 } = nestedObj

console.log({ foo }) // { foo: 123 }
console.log({ var1234 }) // { var1234: '1234str' }

//ネストされたオブジェクトについても分割代入できる。
const {
  bar,
  obj: { x, obj2 },
} = nestedObj
console.log(bar) //str
console.log(x) //1
console.log(obj2) //{ x2: 2, y2: 'strY2' }

//ネストが深い場合でも分割代入可能
const {
  bar: bar2,
  obj: {
    obj2: { x2 },
  },
} = nestedObj
console.log(bar2) //str
console.log(x2) //2
