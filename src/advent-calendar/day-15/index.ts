const a :boolean = true
//const b: boolean と推論される
const b :true | false = true


type Cephalopod = 'octopus' | 'squid'

//type T = `${string} is not fish`
type U = `${Cephalopod} is not fish`

//const tStr: T = 'a is not fish'

//Type '"a is not fish"' is not assignable to type '"octopus is not fish" | "squid is not fish"'.(2322)
//const uStr: U = 'a is not fish'


type T = 'octopus'

const str: T = 'octopus'

//Type '"squid"' is not assignable to type '"octopus"'.(2322)
//const str2: T = 'squid'


//type T = 'octopus'

//const constStr: "octopus"
const constStr = 'octopus'

//let letStr: string
let letStr = 'octopus'
export{}