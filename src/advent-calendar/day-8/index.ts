{
  const obj: {
    num: number
    readonly readonlyNum: number
  } = {
    num: 314,
    readonlyNum: 271,
  }

  obj.num = 3141
  //obj.readonlyNum = 2718 // Cannot assign to 'readonlyNum' because it is a read-only property.(2540)
}

{
  type readonlyObj = Readonly<{
    num: number
    name: string
  }>

  const obj: readonlyObj = {
    num: 314,
    name: "pi",
  }

  //   obj.num = 1 // Cannot assign to 'num' because it is a read-only property.(2540)
  //   obj.name = 'one'// Cannot assign to 'name' because it is a read-only property.(2540)
}

{
  type readonlyObj = Readonly<{
    num: number
    numObj: {
      name: string
      num: number
    }
  }>
  const obj: readonlyObj = {
    num: 314,
    numObj: {
      name: "two",
      num: 2,
    },
  }

  obj.numObj.num = 3 //コンパイルエラーが発生しない
  // obj.numObj = { name: "three", num: 3 } //Cannot assign to 'numObj' because it is a read-only property.
}

{
  const obj = {
    obj1: { obj2: { obj3: { num: 3, name: "three" } } },
  } as const
}
//obj.obj1.obj2.obj3.name = 'four' // Cannot assign to 'name' because it is a read-only property.(2540)

const obj = {
  obj1: { obj2: { obj3: { num: 3, name: "three" } } },
} as const

type NestedObj = typeof obj
