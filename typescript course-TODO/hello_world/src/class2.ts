//? generic class type
// class KeyValue1{ constructor(public key: number, public value: string){} }
// let pair1 = new KeyValue1(1, 'str')
// let pair2 = new KeyValue1("1", 'str') // error
class KeyValue2 <K, V> { constructor(public key: K, public value: V){} }
// let pair6 = new KeyValue2 (100, 'str') 
let pair3 = new KeyValue2 <number, string> (1,' str')
let pair4 = new KeyValue2 <string, string> ("1", 'str')
let pair5 = new KeyValue2 <boolean, number> (true, 1) 

//? generic method or function
function wrapInArray <T> (value: T) {
    return [value]

}
let number = wrapInArray <number> (123456789)
console.log(number, typeof number)

//? generic interface
interface Result <T> {
    data: T | null,
    error: string | null
}
interface User { username: string }
interface Product { title: string }
//
function fetch <T> (url: string): Result <T> {
    return {
        data: null,
        error: url

    }
}
fetch <User> ('url')
fetch <Product> ('url')

//? generic function
// long extends
function echo <T extends number | string | {name: string} | Result <number>> (value: T): T {
    return value
}

//? generic class inheritance
class Store <T> {
    protected _objects: T[] = []

    add(obj: T): void{
        this._objects.push(obj)

    }

}
class CompressStore <T> extends Store <T> {
    compress() {}

}
let store = new CompressStore <Product> ()
store.add({title: 'ali'})

//?
interface ProductS{
    name: string,
    price: number

}

//? type mapping
type ReadOnly<T> = {
    readonly [key in keyof T]: T[key]

    /** - result
     * readonly name: string
     * readonly name: number
     * etc
     */ 

}
let test1: ReadOnly <ProductS> = {
    name: 'a',
    price: 1
}