## 12/9 readonlyなプロパティは関数を通して変更されうる
オブジェクトを`readonly`なプロパティとしたときには、そのプロパティに値を代入しようとするとコンパイルエラーが発生するようになります。
```ts
type ReadonlyObj = {
    readonly num: number
}

const obj: ReadonlyObj = {
     num: 314
}

obj.num=271 //Cannot assign to 'num' because it is a read-only property.(2540)

```
しかし、以下のように`readonly`ではないプロパティを持つオブジェクト型を引数の型とする関数を経由して同様の処理を行うと、コンパイルエラーが起こることなくプロパティの値を変更できてしまうので注意が必要です。
```ts
type Obj = {
    num: number
}

type ReadonlyObj = {
    readonly num: number
}


const obj: ReadonlyObj = {
     num: 314
}

const changeNum = (obj: Obj)=>{
    return obj.num = 271
}

console.log(obj) //{ "num": 314 } 
changeNum(obj) // readonlyなプロパティを（コンパイルエラーなしで）書き換えられてしまう。
console.log(obj) //{ "num": 271 } 
```