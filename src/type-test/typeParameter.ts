
type HasName = {
    name: string
}

type Animal = {
    name: string
}

type Human = {
    name:string
    age: number
}

type Family<Parent extends HasName, Child extends HasName = Animal> = {
    mother: Parent
    father: Parent
    child: Child
}




//optionalな型引数を設定した場合、デフォルト値に設定した型もextendsの条件（HasNameの部分型であること）を満たす必要がある。

//Type 'AnimalAge' does not satisfy the constraint 'HasName'.
//Property 'name' is missing in type 'AnimalAge' but required in type 'HasName'.ts(2344)
// 
//type ErrorFamily<Parent extends HasName, Child extends HasName = AnimalAge> = {
//     mother: Parent
//     father: Parent
//     child: Child
// }
//
//type AnimalAge = {
//     age: number
// }



//SはTの部分型(型Sに該当するオブジェクトは型Tにも該当する。)
type T = {
    a:number
}

type S = {
    a:number
    b:number
}

//引数以外の型条件は揃えてある前提。
//Sfunctionの引数となれるオブジェクトは、Tfunctionの引数にもなれる。
const Tfunction = (arg: T):number => {
    return arg.a
}

const Sfunction = (arg: S):number => {
    return arg.b
}

export {}