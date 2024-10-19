
---
#typescript #installation
```bash
# -g: global installation
# npm: nodejs package manger
npm install typescript -g
```
---
#typescript #datatype
```typescript
Number
String
Boolean
Null
Undefined
Void
Object
Array
Tuples
Enum
Any // You should never use
Never
Unknown
```
---
#typescript #primitive-datatype #syntax
```typescript
let str: string = 'STRing'
let num: number = 123_456
let bool: boolean = true
```
---
#typescript #function
```typescript
// simple structure
function func(){
	return
}

// datatype parameter
function func(param1: string){
	return
}
function func(param1: string, param2: number, param3: boolean){
	return
}

// datatype return value of function
function func(): boolean {
	return false
}

// more than one datatype
function func(param: string | number): string | number {
	return false
}
```
