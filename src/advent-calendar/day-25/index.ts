import { z } from "zod";

const testSchema = z.object({
    num: z.number()
})
type TestSchemaType = typeof testSchema
// type TestSchemaType = z.ZodObject<{
//     num: z.ZodNumber;
// }, "strip", z.ZodTypeAny, {
//     num: number;
// }, {
//     num: number;
// }>


type TestType = z.TypeOf<TestSchemaType>
// type TestType = {
//     num: number;
// }


const mySchema = z.object(
    {
        nullableNum: z.number().nullable(),
        str:z.string(),
        obj:z.object({
            foo: z.number(),
            bar: z.string(),
        })
    }
)

type ZodMySchema = typeof mySchema

type MySchemaType = z.infer<typeof mySchema>
// type MySchemaType = {
//     nullableNum: number | null;
//     str: string;
//     obj: {
//         foo: number;
//         bar: string;
//     };
// }


//z.infer
// (alias) type infer<T extends ZodType<any, any, any>> = T["_output"]
// export infer