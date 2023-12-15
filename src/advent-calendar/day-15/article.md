## 12/15 リテラル型と型推論のwidening
### リテラル型
`string`型や`number`型などの型はプリミティブ型と呼ばれますが、このプリミティブ型よりもさらに細かい型として、プリミティブ型の部分型であるリテラル型があります。`'foo'`や`123`などがリテラル型にあたり、この型を持つ変数にはリテラル型として指定した値のみが代入可能となります。
```ts
type T = 'octopus'

const str: T = 'octopus'

//Type '"squid"' is not assignable to type '"octopus"'.(2322)
const str2: T = 'squid'
```
上の例は、リテラル型である`octopus`型の変数に`octopus`以外の文字列が代入できない例となっています。
プリミティブ型である`boolean`型にも、その部分型に`true`型と`false`型というリテラル型が存在します。`boolean`型はリテラル型のユニオン型`true | false`と同じ型となっています。
```ts
const a :boolean = true
//const b: boolean と推論される
const b :true | false = true
```
#### テンプレートリテラル型
文字列のリテラル型にはテンプレートリテラル型というものもあり、文字列が特定の形をしていることを明示することができます。文字列のテンプレートと同様に、`` `${}` ``という書き方でテンプレートリテラル型は記述されます。
```ts
type Cephalopod = 'octopus' | 'squid'

type T = `${string} is not fish`

//type U = "octopus is not fish" | "squid is not fish"
type U = `${Cephalopod} is not fish`

const tStr: T = 'tuna is not fish'

//Type '"tuna is not fish"' is not assignable to type '"octopus is not fish" | "squid is not fish"'.(2322)
const uStr: U = 'tuna is not fish'
```

### リテラル型のwidening
リテラル型に型推論が働く場合に、推論結果がプリミティブ型へ拡張される場合があります。この働きは**リテラル型のwidening**と呼ばれています。プリミティブ型へ拡張されるのは、リテラル型で指定した値以外が再代入されることが想定されるものが対象となっています（たとえば`let`変数やオブジェクトリテラルなどが該当します）。
```ts
//const constStr: "octopus"
const constStr = 'octopus'

//let letStr: string
let letStr = 'octopus'
```
**widening**が働くのは型推論のときですので、あらかじめ型注釈や`as const`をつけておけば**widening**されずにリテラル型を使用することが可能です。
```ts
type T = 'octopus'

//let letStr: "octopus"
let letStr:T = 'octopus'

//let letStr2: "octopus"
let letStr2 = 'octopus' as const
```