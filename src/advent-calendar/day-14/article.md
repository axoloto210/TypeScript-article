## 12/14 オプショナルプロパティ\"?:\"と\"undefinedとのユニオン型\"は同じもの？
オプショナルプロパティとは、オブジェクト型の機能の一つで、プロパティが存在しない可能性があることを型情報として明示できます。
存在しないプロパティにアクセスした場合には通常はコンパイルエラーが出ますが、オプショナルプロパティへのアクセスはコンパイルエラーとはならず、`undefined`となります。
```ts
type Obj = {str: string, num?: number}

const obj: Obj = {str: "one"}

console.log(obj.str)// "one"
console.log(obj.num)// undefined
```
上のコード例では、コンパイルエラーが発生することなく、`obj`に存在しないプロパティ`num`へアクセスできています。
`Obj`の型をVSCodeなどでカーソルを合わせて確認してみると、以下のように`undefined`とのユニオン型が付加されています。
```ts
type Obj = {
    str: string;
    num?: number | undefined;
}
```
このプロパティは一見 `num: number | undefined` としても同じに思えますが、**そのプロパティが存在しないことが許されるか**という違いがあります。

### ユニオン型
ユニオン型は「または」を表す型の記法で、`|` を用いて `T | U` のように記述します。`T | U` は"`T`型または`U`型"である型を表します。
```ts
type T = {str: string, num: number}
type U = {str: string, bool: boolean}

const obj: T | U = {str: "one", num: 1}
const obj2: T | U = {num: 1, bool: true}//T型でもU型でもない場合にはコンパイルエラーとなる。
//Type '{ num: number; bool: true; }' is not assignable to type 'T | U'.
//Property 'str' is missing in type '{ num: number; bool: true; }' but required in type 'U'.(2322)
```
### `undefined`とのユニオン型とオプショナルプロパティ
`undefined`とのユニオン型`T | undefined`は"T型または`undefined`型"である型を表します。オブジェクトのプロパティにこの型がついている場合、このプロパティは`undefined`であっても問題ありませんが、**プロパティが存在しない**ことによって`undefined`が割り当てられる場合にはコンパイルエラーとなります。
```ts
type T = { str?: string , num: number}
type U = { str: string | undefined , num:number}

const tObj: T = { num: 1}//tObjについてはコンパイルエラーが出ない。
const uObj: U = { num: 1}
//Property 'str' is missing in type '{ num: number; }' but required in type 'U'.(2741)

const uObj2: U = { num: 1, str: undefined} //undefinedを割り当てればコンパイルエラーとはならない。
```
上のコード例からもわかるように、オプショナルプロパティについてはオブジェクトに存在していなくてもエラーとなりませんが、`undefined`とのユニオン型の場合にはプロパティが存在しない場合にエラーとなります。
`undefined`であってもよいが、オブジェクトに必ず存在していてほしいようなプロパティがあるときには、`undefined`とのユニオン型の出番ですね。