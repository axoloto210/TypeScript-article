## 12/23 Homomorphic Mapped Types と準同型写像
Mapped Types`{[P in T]: U}`のうち、`T`の部分がオブジェクトのキーとなっている形`{[P in keyof T]: U}`のものはHomomorphic Mappd Types と呼ばれます。
構造を保存する写像である、準同型写像(homomorphic mapping)が名前の由来となっています。
Homomorphic Mapped Types`{[P in keyof T]: U}`は、作成元となるオブジェクト型`T`と全く同じプロパティキーをもつため、オブジェクトの構造が保存されていることを表しているようですね。

>A mapped type of the form { [P in keyof T]: X } is homomorphic with T (because it has the same set of properties as T) and now preserves the optional and readonly modifiers as they exist on the properties in T.

https://github.com/microsoft/TypeScript/pull/12563

## Homomorphic Mapped Typesとプロパティ修飾子の保存
オブジェクト型のプロパティには`readonly`や`?`といったプロパティ修飾子(property modifier)を指定できます。
Homomorphic Mapped Typesにはこの修飾子を保存する機能が備わっています。
```ts
type Obj = {
    readonly num: number
    str ?: string
}

type Homomorphic = {
    [PropertyKey in keyof Obj]: Obj[PropertyKey]
}
// type Homomorphic = {
//     readonly num: number;
//     str?: string | undefined;
// }

type keyStr = "num" | "str" 

type NonHomomorphic = {
    [PropertyKey in keyStr]: Obj[PropertyKey]
}
// type NonHomomorphic = {
//     num: number;
//     str: string | undefined;
// }
```
上のコードでは、Homomorphic Mapped Types を使用した場合には確かに修飾子が保存されていますが、`keyof Obj`から得られる型と同じ型`"num" | "str"`によって得たMapped Types型を確認してみるとプロパティ修飾子が外れた型となっていることがわかります。 
