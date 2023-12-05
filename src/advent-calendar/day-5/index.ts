const str : string = 'foo'

type Obj = {
    [k: string]: number | string
    one: 1
}

const obj : Obj = {
    one: 1,
    two: 2,
    [str]: 'test'
}

console.log(obj.foo) // "test" 

console.log(obj) //{"one": 1, "two": 2,"foo": "test"} 
//存在しないプロパティにアクセスしても型エラーが出ない。
console.log(obj.notExistProp)　//undefined
//インデックスシグネチャには、このように型安全性を破壊する力があるため、Mapの使用が推奨されている。

export {}