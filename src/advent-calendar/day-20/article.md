## 12/20 Conditional Typesの基礎
Conditional Typesは**型の条件分岐**を行える機能で、`T extends U ? A : B`という構文で表されます。三項演算子と同様に、`T`型が`U`型の部分型であれば`A`型に、そうでなければ`B`型になります。
```ts
type IsString<T> = T extends string ? true : false

//type NumIsString = false
type NumIsString = IsString<number>

//type LiteralIsString = true
type LiteralIsString = IsString<'str'>
```
## ユニオン型と分配法則
Conditional Typesの構文`T extends U ? A : B`の`T`の部分にユニオン型が指定された場合には、分配が行われる点には注意が必要です。
```ts
type ToArray<T> = T extends string ? T[] : never

//type UnionArray = "octopus"[] | "squid"[]
type UnionArray = ToArray<"octopus"|"squid"> 
```
`UnionArray`の型としては、構文を文字通りみていくと`"(octopus"|"squid")[]`という型になりそうですが、実際にはユニオン型の構成要素が分配される形となり、`"octopus"[] | "squid"[]`型となります。
`"(octopus"|"squid")[]`のようなユニオン型の配列型は、以下のコード例のような記述で取得可能です。
```ts
type X<T> = T extends string ? [T] : never
//type Y = ("octopus" | "squid")[]
type Y = X<"octopus" | "squid" >[number][]
```