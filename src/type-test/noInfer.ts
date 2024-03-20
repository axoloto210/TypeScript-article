function func<T extends string>(a: T, b: T): void { }

function noInferFunc<T extends string>(a: T, b: NoInfer<T>): void { }

//引数2つが同じ文字列
func('abc', 'abc') //function func<"abc">(a: "abc", b: "abc"): void

noInferFunc('abc', 'abc') //function noInferFunc<"abc">(a: "abc", b: "abc"): void

//引数2つが異なる文字列
func('abc', '123')// function func<"abc" | "123">(a: "abc" | "123", b: "abc" | "123"): void

//noInferFunc('abc', '123')// function noInferFunc<"abc">(a: "abc", b: "abc"): void
//Argument of type '"123"' is not assignable to parameter of type '"abc"'.(2345)

//NoInfer型を使用せずに記述した場合
function funcWithoutNoInfer<T extends string, U extends T>(a: T, b: U): void { }
funcWithoutNoInfer('abc', 'abc')
//funcWithoutNoInfer('abc', '123')
// function funcWithoutNoInfer<"abc", "abc">(a: "abc", b: "abc"): void
//Argument of type '"123"' is not assignable to parameter of type '"abc"'.(2345)

//型引数を指定すれば簡潔だが...
//func<'abc'>('abc', '123')
// function func<"abc">(a: "abc", b: "abc"): void