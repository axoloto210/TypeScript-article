## 12/19 Mapped Typesの基礎
Mapped Typesはユニオン型とプロパティ値の型を指定することで、ユニオン型を構成する各要素をキーとして、指定した値の型をもつオブジェクト型を設定できる機能で、`{[P in T]: U}`と言う構文で表されます。
インデックスシグネチャ`{[key: K]: U}`に似た構文を持ちますが、プロパティのキーが`T`の部分型であるという制約が付いている点が異なります。
インデックスシグネチャにはプロパティ名を動的に決めた場合に存在しないプロパティへのアクセスがコンパイルエラーとならない、という型安全性への問題がありますが、Mapped Typesにはそのような問題がありません。
## in演算子
`{[P in T]: U}`に登場する`in T`部分で使用できる型は`string | number | symbol`の部分型である必要があります。
`string | number | symbol`、は`keyof`が取りうるあらゆる型を部分型にもつ、いわゆる`keyof`の上界に当たる型です。
```ts
type A = {num: number, str: string}

//Type 'A' is not assignable to type 'string | number | symbol'.(2322)
type B = {[num in A]:number}

// type C = {
//     num: number;
//     str: number;
// }
type C = {[num in keyof A]:number}
```
## `{[P in T]: U}`の例
```ts
type T = {
    num: number
    str: string
    bool: boolean
}

// type Obj = {
//     num: "num"[];
//     str: "str"[];
//     bool: "bool"[];
// }
type Obj = {
    [P in keyof T]: P[]
}

// type CopyOfT = {
//     num: number;
//     str: string;
//     bool: boolean;
// }
type CopyOfT = {
    [P in keyof T]: T[P]
}
```
`Obj`型は`keyof T`、つまり`"num" | "str" | "bool"`というユニオン型について、「各構成要素をキー名に持ち、値がそれぞれその要素の配列型`P[]`となるプロパティ」をもつオブジェクト型となります。
## mapped とは？
mapは数学の用語では写像となります。
写像とは、集合の各要素について、対応する要素を決める規則のことです。
Mapped Typesは`x|y|z`という集合の各要素`x`、`y`、`z`を`{x:f(x), y:f(y), z:f(z)}`に写像$f$で写していると捉えると、mappedという名前が相応しいように思えますね。
