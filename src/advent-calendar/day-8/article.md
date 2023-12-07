## 12/8 readonly でプロパティを読み取り専用に
## `readonly`
オブジェクトのプロパティを読み取り専用にする機能として、`readonly`というものがあります。プロパティ名の前に`readonly`をつけることで、そのプロパティの値に代入しようとするとコンパイルエラーが発生するようになります。
```ts
const obj: {
    num: number
    readonly readonlyNum: number
} = {
    num:314,
    readonlyNum: 271
}

obj.num = 3141
obj.readonlyNum = 2718 // Cannot assign to 'readonlyNum' because it is a read-only property.(2540)
```

##  オブジェクトのプロパティ全体を読み取り専用にする`Readonly`型
`Readonly<T>`という組み込みの型を使用すれば、オブジェクトのプロパティすべてを読み取り専用にできます。
```ts
type readonlyObj = Readonly<{
num: number
name: string
}>

const obj: readonlyObj = {
    num: 314,
    name: 'pi'
}

obj.num = 1 // Cannot assign to 'num' because it is a read-only property.(2540)
obj.name = 'one'// Cannot assign to 'name' because it is a read-only property.(2540)
```

`Readonly<T>`は`T`のプロパティをすべて`readonly`にしますが、プロパティがオブジェクトだった場合、そのオブジェクトに含まれるプロパティまではreadonly とならないので注意する必要があります（オブジェクト自体がreadonly となります）。
```ts
type readonlyObj = Readonly<{
  num: number
  numObj: {
    name: string
    num: number
  }
}>
const obj: readonlyObj = {
  num: 314,
  numObj: {
    name: "two",
    num: 2,
  },
}

obj.numObj.num = 3 //コンパイルエラーが発生しない
obj.numObj = {name: 'three', num: 3} //Cannot assign to 'numObj' because it is a read-only property.
```

## `as const`
ネストの深い階層のプロパティも含めてreadonlyにしたい場合には、`as const`を使用する手もあります。
`as const`は、オブジェクトリテラルのプロパティを再帰的にreadonlyとします（型に`as const`をつけられるわけではない点に注意）。型アサーションとは異なり、型安全性を損なう機能ではないため、積極的に使用していけます。
```ts
const obj = {
    obj1: { obj2: { obj3: { num: 3, name: 'three' }}}
} as const

obj.obj1.obj2.obj3.name = 'four' // Cannot assign to 'name' because it is a read-only property.(2540)

```

型として使用したい場合には、`as const`で読み取り専用とした値から`typeof`によって型を作成することができます。
```ts
const obj = {
    obj1: { obj2: { obj3: { num: 3, name: 'three' }}}
} as const

type NestedObj = typeof obj
```
`NestedObj`型は以下のようになります。
```ts
type NestedObj = {
    readonly obj1: {
        readonly obj2: {
            readonly obj3: {
                readonly num: 3;
                readonly name: "three";
            };
        };
    };
}
```