const map: Map<string,number> = new Map()
map.set('key2',210)
map.set('key1',1234)
map.set('key3',600)

const keyVar = 'key1'

console.log(map.has(keyVar))
console.log(map.get(keyVar))

console.log(map.has('not existed key'))
console.log(map.get('not existed key'))
map.delete(keyVar)
console.log(map)

console.log(map.keys())

console.log(map.values())

console.log(map.entries())

for (let entry of map.entries()) {
    console.log(entry[0], entry[1]);
}

for (let [key, value] of map.entries()) {
    console.log(key, value);
}


export {}

let entriesArray = Array.from(map.entries());
console.log(Array.from(map.entries()))

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