## 組み込み型（Extract、Exclude、Partial、Required、NonNullable）
### `Extract<T, U>`型、`Exclude<T, U>`型
`Extract<T, U>`は型`T`から型`U`の部分型となる型を抽出する組み込み型です。抽出できないような型の指定がされた場合には`never`型が返されます。
`T`としてはユニオン型が指定されることが多いですが、必ずしもユニオン型である必要はありません。
```ts
type T = { str: string, num: number }
type U = T | number | boolean | "314"
//type P = "314"
type P = Extract<U, string>
//type Q = { str: string; num: number;}
type Q = Extract<T, {str: string}>
//type R = never
type R = Extract<U, {foo: boolean}>
```
`Exclude<T, U>`型は、`Extract<T, U>`とは反対に、型`T`から型`U`の部分型となる型を取り除く組み込み型です。すべての型情報が取り除かれるような型`U`が指定された場合には、`never`型が返されます。
```ts
type T = { str: string, num: number }
type U = T | number | boolean | "314"
//type P = number | boolean | T
type P = Exclude<U, string>

//type Q = never
type Q = Exclude<T, {str: string}>

//type R = number | boolean | T | "314"
type R = Exclude<U, {foo: boolean}>
```
### `Partial<T>`型と`Required<T>`型
`Partial<T>`型は、型`T`のプロパティをオプショナルにする型です。
```ts
type T = { str: string, num: number }

// type P = {
//   str?: string | undefined
//   num?: number | undefined
// }
type P = Partial<T>

//type Q = number プリミティブな型はそのまま返ってきている。
type Q = Partial<number>
```
`Readonly`型と同様に、オブジェクトのプロパティを再帰的にオプショナルにするわけではない点に注意が必要です。
```ts
type NestedObj = { str: string, obj:{ str: string, num: number } }

//type R = {
//     str?: string | undefined;
//     obj?: {
//         str: string;
//         num: number;
//     } | undefined;
// }
type R = Partial<NestedObj>
```
`Required`型は、`Partial`型とは逆で、オプショナルな型をオプショナルではなくします。こちらも再帰的にオプショナル型ではなくすわけではないことに注意が必要です。
```ts
type T = { str?: string, num: number }

//type P = { str: string; num: number; }
type P = Required<T>
//type Q = number
type Q = Required<number>

type NestedObj = { str?: string, obj?:{ str?: string, num: number } }
// type R = {
//     str: string;
//     obj: {
//         str?: string;
//         num: number;
//     };
// }
type R = Required<NestedObj>
```
### `NonNullable<T>`型
`NonNullable<T>`型は型`T`から`null`と`undefined`を取り除いた型となります。オブジェクトのプロパティが`null`の場合に取り除いたりはしません。
```ts
//type P = string
type P = NonNullable<string | null | undefined>

type T = null | {str: string, n: null}
//type Q = { str: string; n: null; }
type Q = NonNullable<T>
```
`NonNullable`の元の実装を見てみると、`type NonNullable<T> = T & {};`というようになっています。`{}`という型が`null`もしくは`undefined`以外の部分型であることを利用して、`null`と`undefined`を取り除いているわけですね。