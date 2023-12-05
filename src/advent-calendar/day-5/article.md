## 12/5 インデックスシグネチャと型安全性
オブジェクトのプロパティ型の記法の一つにインデックスシグネチャというものがあります。
`{[key名: string]: プロパティの型}`のように記述することで、オブジェクトに含まれるプロパティの名前や個数が決まっていない場合に対応することができます。
```ts
type Obj = {
    [k: string]: number | string
}

const obj : Obj = {
    foo: 1,
    bar: 2,
    baz:'3'
}
```

## 型安全性
オブジェクトの型を動的に設定するのに便利な機能ですが、型安全性を損なう使い方ができてしまう点には注意する必要があります。具体的には、プロパティ名を動的に決めた場合、存在しないプロパティへのアクセス時にコンパイルエラーが発生しなくなってしまうというものです。
```ts
const str : string = 'foo'
const obj  = {
    one: 1,
    two: 2,
    [str]: 'test'
} 
//型は以下のように推論される
//const obj: {
//     [x: string]: string | number;
//     one: number;
//     two: number;
// }

console.log(obj.foo) // "test" 

console.log(obj) //{"one": 1, "two": 2,　"foo": "test"} 
//存在しないプロパティにアクセスしても型エラーが出ない。
console.log(obj.notExistProp)　//undefined
```
この例では、`foo: string`という型のプロパティを設定しているはずなのに、任意のプロパティ名の存在を許してしまっています。実行時エラーにつながってしまう書き方もできるため、`Map`を使用することが推奨されています。