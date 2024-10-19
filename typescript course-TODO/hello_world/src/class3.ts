//? 1) Decorator
function Component(constructor: Function){
    console.log('Component decorator called')
    constructor.prototype.uniqId = Date.now()
    constructor.prototype.insertDom = () => {
        console.log('Inserting the DOM')
    }
}
@Component
class ProfileComponent{


}
// When you run code '@Component' call the function Component and declare the class like inherit in classes

//? 2) Decorator Factory
function Component1(value: number){
    return (constructor: Function) => {
        console.log('Component decorator called')
        constructor.prototype.uniqId = Date.now()
        constructor.prototype.options = value
        constructor.prototype.insertDom = () => {
            console.log('Inserting the DOM')
        }
    }
}
@Component1(4)
class ProfileComponent1{}

//? Combine Decorators
@Component // 2 
@Component1(123) // 1
class ProfileComponent2{}

//? Method Decorator
function Log(
    target: any,
    methodName: string,
    descriptor: PropertyDecorator
){
    const original = descriptor.value as Function

    descriptor.value = function(message: string){
        console.log('before')
        original.call(this, message) // call sey()
        console.log('after')

    }

}

class Person1{

    @Log
    sey(message: string){
        console.log(message + '   :>')
    }
}
new Person1().sey('Hello')

//? decorator on accessor getter setter ... in video

function MineLength(length: number){
    return (t: any, p: string) => {
        let val: string;
        const descriptor: PropertyDecorator = {
            set(newValue: string){
                if(newValue.length < length)
                    throw new Error('Error')

                else
                    val = newValue
            }

            get(){
                return val
            }

        }
        Object.defineProperties(t, p, descriptor)
    }
}

class USER{
    @MineLength(4)
    password: string;

    constructor(password: string) {
        this.password = password
    }
}
new USER('12343')

//? parameter decorator
