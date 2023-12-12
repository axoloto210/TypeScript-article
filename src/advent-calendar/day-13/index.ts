type T = { str: string; num: number }
type U = T | number | boolean | "314"
//type P = "314"
type P = Extract<U, string>
//type Q = { str: string; num: number;}
type Q = Extract<T, { str: string }>
//type R = never
type R = Extract<U, { foo: boolean }>

type T2 = { str: string; num: number }
type U2 = T | number | boolean | "314"
//type P2 = number | boolean | T
type P2 = Exclude<U, string>
//type Q2 = never
type Q2 = Exclude<T, { str: string }>
//type R = number | boolean | T | "314"
type R2 = Exclude<U, { foo: boolean }>

type T3 = { str: string; num: number }

// type P3 = {
//   str?: string | undefined
//   num?: number | undefined
// }
type P3 = Partial<T>
//type Q3 = number
type Q3 = Partial<number>

type NestedObj = { str: string; obj: { str: string; num: number } }
//type R = {
//     str?: string | undefined;
//     obj?: {
//         str: string;
//         num: number;
//     } | undefined;
// }
type R4 = Partial<NestedObj>

//type P5 = string
type P5 = NonNullable<string | null | undefined>

type T5 = null | {str: string, n: null}
//type Q5 = { str: string; n: null; }
type Q5 = NonNullable<T>

export {}
