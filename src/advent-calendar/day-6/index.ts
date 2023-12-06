const map: Map<string|KeyObj,number> = new Map()
type KeyObj = {key: string}
const keyObj:KeyObj = {key: 'value'}
map.set('key1',1234)
map.set(keyObj,210)

console.log(map)

console.log(map.has('key1')) //true
console.log(map.get('key1')) //1234

for(const key of map.keys()){
console.log(key)
}

for(const value of map.values()){
console.log(value)
}
//1234
//210

for(const[key, value] of map.entries()){
    console.log(key)
    console.log(value)
}
//"key1" 
//1234 
//{"key": "value"} 
//210 





//-------ここから下は未記載--------

const set: Set<string> = new Set()
set.add("set")
set.add('set2')
set.add('set deleted')

set.delete('set deleted')

console.log(set)
console.log(set.has('set'))
console.log(set.has('set deleted'))


//WeakMap や WeakSetというものも存在する。
//keys()やvalues(),entries()を持たないMap, Setであり、キーとしてはオブジェクトしか許されない。
//また、キーのオブジェクトに対する参照が弱参照であり、キーとなるオブジェクトが他の箇所で使用されない場合には
//ガベージコレクションの対象となり、メモリ上から削除可能となる。


// const wm = new WeakMap()
// //Argument of type 'string' is not assignable to parameter of type 'object'.ts(2345)
// wm.set('str','test')