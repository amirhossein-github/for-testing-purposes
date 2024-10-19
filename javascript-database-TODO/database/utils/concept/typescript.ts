//* Configuration
export const tsconfig = {
    description: {
        // source files of project
        "rootDir": "./src",

        // distribute directory
        "outDir": "./dist",

        // remove all comments
        "removeComments": true,

        // when you have error don't compile typescript
        "noEmitOnError": true,

        // avoid 'any type' error
        "noImplicitAny": false,

        // ecmascript version "ES6"
        "target": "es2016",

        // parameter that you don;t use in function
        "noUnusedParameters": true,

        // if function don't return define return type get error
        "noImplicitReturns": true,

        // variables that don't use in project
        "noUnusedLocals": true,

        // if null or undefined: in function caller:: call(null), call(str)
        "strictNullChecks": true,

        // the code after: while(true){   code   }; console.log('never log cause of loop')
        "allowUnreachableCode": false,

        // if override method in classes and extends
        "noImplicitOverride": true
    },

    file: import('./../config/tsconfig.json')
}

//* Datatype
export const number: number = 102

export const string: string = 'string'

export const boolean: boolean = true

export const arrayNumber:  number[]  = [1, 2, 3]
export const arrayString:  string[]  = ['1', '2', '3']
export const arrayBoolean: boolean[] = [true, false, true]

export const arrayNesting1: number[][]  = [[1,2,3], [1,2,3]]
export const arrayNesting2: (number | string | boolean | null | undefined)[] = [1, 2, 3, '1', '2', '3', undefined]
export const arrayNesting3: (string | number | boolean)[][] = [[1,'str',true], [false,2,'str'], ['str',true,3]]

export const tuple1: [number, string] = [1, 'amir']
export const tuple2: [number, boolean] = [1, true]
export const tuple3: [string, string] = ["1", 'javascript']

export enum enum1 { Small, Medium, Large } //0,1,2
export enum enum2 { Small='s', Medium='m', Large='l' }

export function functionReturnVoid1(): void{return}
export function functionReturnVoid2(): void{}
export function functionReturn1(): number{ return 100 }
export function functionReturn2(): string{ return '100' }
export function functionReturn3(): number | string { return 100 }
export function functionParameter1(param1: number){}
export function functionParameter2(param1?: boolean, param2: number = 100){ return param1 ?? param2 }
export function functionParameter3(param1: string = 'default string'){}