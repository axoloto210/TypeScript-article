//記事用

const anyValue: any = 271
//const neverValue: never = anyValue //Type 'any' is not assignable to type 'never'.(2322)

function neverArgFunction(arg: never) {
  return 314
}

//const num = neverArgFunction(1) //Argument of type 'number' is not assignable to parameter of type 'never'.(2345)
const numAsNever = neverArgFunction(1 as never) //型アサーションによってコンパイルエラーを握りつぶすことはできます。

console.log(numAsNever) //314

const neverValue: never = 1 as never
const str: string = neverValue
const obj: { str: string; num: number } = neverValue

function neverArgFunction2(arg: never) {
  const num: number = arg
  const obj: { str: string; num: number } = arg
  return 314
}

type UnionNever = string | number | never

const num: UnionNever = 1 //型注釈をつけてみると、type UnionNever = string | number　のように never 部分が無視されて表示される。

function fn(arg: string | number) {
  if (typeof arg === "string") {
    console.log(arg) //(parameter) arg: string
  } else if (typeof arg === "number") {
    console.log(arg) //(parameter) arg: number
  } else {
    console.log(arg) //(parameter) arg: never
  }
}

export {}
