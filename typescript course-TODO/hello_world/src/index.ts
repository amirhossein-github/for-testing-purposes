//? object
let employ: {
    readonly id: number, // const
    name: string,
    retire: (data: Date) => void

} = {
    id: 1,
    name: '',
    retire: (date: Date) => {
        console.log(date)

    },

}

//-------------
// implicitly
// explicitly

// annotate

//---------------

//? personal type: type alias
type Employee = {
    readonly id: number, // const
    name: string,
    retire: (data: Date) => void

}

let employ1: Employee = {
    id: 1,
    name: '',
    retire: (date: Date) => {
        console.log(date)

    },

}

//? union type
let wight: number | string = '10kil'
// narrowing
function narrowing(input: string | number){

    if (typeof input === 'number')
        return input ** 2

    else
        return input.charAt(-1)

}

//? intersection
type A = { a: () => void }
type B = { b: () => void }

// new type of many type
type C = A & B // <<< intersection

let test: C =  {
    a: () => {},
    b: () => {}

}

//? literal type
let literal1: 50 | 100 = 50
let literal2: 50 | 100 = 100
let literal3: 'cm' | 'inch' | 'mm' | 'dm' | 'm' = 'cm'

//? null and undefined: in function and methods
// lang way
if (employ1 !== null && employ1 !== undefined)
    console.log(employ1.retire(new Date()))

// short way
console.log(employ1?.retire(new Date()))

//? optional call operator: 
let log1: any = null
let log2 = (msg: string) => {console.log(msg)}
// log?('a')

//? optional element access operator: array?.[0]
// array
// if is not null or undefined
// array?[0]

//? if null or undefined: in var
// nullish coalescing operator
let speed: number | null = null
let userSpeed = speed ?? 30

//? type assertion
// 1)
// let phone1 = document.getElementById('id');
// console.log(phone1.value) // error

// 2)
let phone2 = document.getElementById('id') as HTMLInputElement;
console.log(phone2.value)

// 3)
let phone3 = <HTMLInputElement> document.getElementById('id');
console.log(phone2.value)

//? unknown: narrowing
function render(document: unknown){
    if(typeof document === 'string'){
        return document.charAt(-1)

    } else {
        return typeof document

    }
}

//? type never
function loop(): never{
    while(true){

        console.log("never stop")

    }
}

loop()

//! chapter TWO
// type of programming
// procedural
// functional
// eventual
// aspectual
// object oriented

 