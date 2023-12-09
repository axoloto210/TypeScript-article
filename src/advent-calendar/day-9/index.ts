type ReadonlyObj = {
    readonly num: number
}


const obj: ReadonlyObj = {
     num: 314
}

//obj.num=271 //Cannot assign to 'num' because it is a read-only property.(2540)


type Obj = {
    num: number
}


const obj2: ReadonlyObj = {
     num: 314
}

const changeNum = (obj: Obj)=>{
    return obj.num = 271
}

console.log(obj2) //{ "num": 314 } 
changeNum(obj2) // readonlyなプロパティを（コンパイルエラーなしで）書き換えられてしまう。
console.log(obj2) //{ "num": 271 }













export {}