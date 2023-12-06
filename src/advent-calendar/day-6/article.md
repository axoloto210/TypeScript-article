## Mapの型
### Map
`Map`はキーとそれに対応する値を保持する機能を持つオブジェクトです。
キーとして任意の値を用いることができ、オブジェクトをキーとすることも可能です。
また、`Map`の型は`Map<K, V>`のように表されます（Kはキーの型、Vは値の型です）。
### Mapの操作
`Map`にキーと値を追加するには`set`メソッドを利用します。
また、`Map`に格納された値を取得する`get`メソッドや、引数として渡したキーが`Map`に保持されているかを判定できる`has`メソッドなどもあります。
```ts
const map: Map<string|KeyObj,number> = new Map()
type KeyObj = {key: string}
const keyObj: KeyObj = {key: 'value'}
map.set('key1',1234)
map.set(keyObj,210)

console.log(map) //Map (2) {"key1" => 1234, {"key": "value"} => 210} 
console.log(map.has('key1')) //true
console.log(map.get('key1')) //1234
```
### Mapの値を列挙する
`Map`には`keys`、`values`、`entries`といった、保持している値を列挙するためのメソッドも備わっています。これらのメソッドの返り値はイテレータと呼ばれるもので、ループ処理での使用頻度が高いです。
```ts
const map: Map<string|KeyObj,number> = new Map()
type KeyObj = {key: string}
const keyObj: KeyObj = {key: 'value'}
map.set('key1',1234)
map.set(keyObj,210)

for(const key of map.keys()){
console.log(key)
}
//"key1" 
//{"key": "value"} 

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
```