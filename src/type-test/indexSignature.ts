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

obj[`${str}`] = 500

console.log(obj)
//存在しないプロパティにアクセスしても型エラーが出ない。
//undefined
console.log(obj.vvv)
//インデックスシグネチャには、このように型安全性を破壊する力があるため、Mapの使用が推奨されている。