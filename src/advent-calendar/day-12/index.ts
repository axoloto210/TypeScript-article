type T = { str: string, num: number, obj: { foo: string, bar: boolean } }

//type P = { num: number; str: string;}
type P = Pick<T, "num" | "str">
//type Q = { obj: { foo: string; bar: boolean;};}
type Q = Pick<T, "obj">
//type R = { foo: string; }
type R = Pick<T["obj"], "foo">

type T2 = { str: string, num: number, obj: { foo: string, bar: boolean } }

//type P2 = { obj: { foo: string; bar: boolean;};}
type P2 = Omit<T, "num" | "str">
//type Q2 = { num: number; str: string;}
type Q2 = Omit<T, "obj">
//type R2 = { bar: boolean;}
type R2 = Omit<T["obj"], "foo">
export{}