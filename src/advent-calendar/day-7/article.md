## WeakMapとガベージコレクション
### WeakMap
`Map`に似たオブジェクトに`WeakMap`というものが存在します。
`Map`と違って列挙を行うためのメソッド（`keys`、`values`、`entries`）を持たず、キーとしてはオブジェクト（もしくはnon-registered なシンボル）のみを設定することができ、数値や文字列を設定することはできません。
```ts
const weakMap = new WeakMap()
//Argument of type 'string' is not assignable to parameter of type 'object'.ts(2345)
weakMap.set('str','test')
//実行時エラーが発生（Invalid value used as weak map key）
```
### ガベージコレクション
`WeakMap`が`Map`と異なる点として、キーへの参照が弱参照である点があります。
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management#garbage_collection

このことは、キーとして設定できる値がオブジェクトかnon-registered なシンボルしか許されていない理由の一端となっています。
registered なシンボルはガベージコレクションの対象とならないため、`WeakMap`のキーとしての使用が許可されていないようです。
>Because registered symbols can be arbitrarily created anywhere, they behave almost exactly like the strings they wrap. Therefore, they are not guaranteed to be unique and are not garbage collectable. Therefore, registered symbols are disallowed in WeakMap, WeakSet, WeakRef, and FinalizationRegistry objects.


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry

`Map`でキーとして使用されているオブジェクトは、`Map`自体がガベージコレクトされない限りはガベージコレクションの対象とならず、メモリ上に保持され続けます。これは、`Map`がキーを列挙するメソッドを持っているため、キーとして登録されたオブジェクトが不要になったと判断されないためです。

### WeakMapまとめ
キーを列挙するメソッドを持たないようにしたり、弱参照とならないキーを設定できないようにするなど、`Map`の機能にいくつかの制約をつけることでメモリの節約ができるようにしたオブジェクトが`WeakMap`であると言えます。