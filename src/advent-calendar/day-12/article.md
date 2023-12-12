## 12/12 ユーティリティ型（組み込み型）、PickとOmit
TypeScriptの標準ライブラリには、組み込み型、ユーティリティ型と呼ばれる汎用性の高い型が用意されています。以前に紹介した`Readonly<T>`型も組み込み型の一つです。
https://zenn.dev/link/comments/ecf10ccb3a921e

### `Pick<T, K>`型と`Omit<T, K>`型
Pick型は、オブジェクト型`T`から`K`で指定したキーをもつプロパティを取り出して**新しいオブジェクト型**を作り出す組み込み型です。`K`には`T`型のキーをユニオン型で指定できます。
```ts
type T = { str: string, num: number, obj: { foo: string, bar: boolean } }

//type P = { num: number; str: string;}
type P = Pick<T,"num"|"str">
//type Q = { obj: { foo: string; bar: boolean;};}
type Q = Pick<T,"obj">
//type R = { foo: string; }
type R = Pick<T["obj"], "foo">
```
作成される型はオブジェクト型であることに注意が必要ですね。

Omit型はPick型とは反対に、`K`で指定したキーをもつプロパティを除いたオブジェクト型を返します。
```ts
type T = { str: string, num: number, obj: { foo: string, bar: boolean } }

//type P = { obj: { foo: string; bar: boolean;};}
type P = Omit<T, "num" | "str">
//type Q = { num: number; str: string;}
type Q = Omit<T, "obj">
//type R = { bar: boolean;}
type R = Omit<T["obj"], "foo">
```

`Pick<T, K>`の`K`には`K extends keyof T`という制約が課されており、`T`のキーの部分型を指定できます。一方で`Omit<T, K>`の`K`に課されている制約は`K extends keyof any`となっており、Pickの`K`よりも条件の緩い指定ができるようになっています。