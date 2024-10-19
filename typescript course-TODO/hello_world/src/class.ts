class Account{
    // 1)
    // readonly id: number;  //* readonly
    // nickname?: string;  //* ?
    // name: string; //* public access
    // private _balance: number; //* private access, start with '_'

    // constructor(public readonly id: number, name: string, balance: number){
        // this.id = id
        // this.name = name
        // this._balance = balance

    // }

    // 2)
    constructor(
        public readonly id: number,
        public name: string,
        private _balance: number
    ){}

    // public method
    deposit(amount: number): void{
        if(amount <= 0){
            throw new Error("Invalid amount")

        }

        this._balance += amount / this.calTax()
    }

    // public method
    // 1)
    getBalance(){
        return this._balance

    }
    // 2)
    // getter
    get balance(){
        return this._balance

    }

    // setter
    set balance(userInput){
        if (userInput <= 0)
            throw new Error("Invalid value")

        this._balance = userInput

    }

    // private method
    private calTax(){
        return 20

    }

}

let account = new Account(0, 'amir', 1_000)
account.deposit(10000)

// read it in safe mode
console.log(account.getBalance())
console.log(account.balance)
account.balance = 20


// access modifier
// public, private, protected


//? index signature property
class SeatAssignment{
    [seatNumber: string]: string;

}

let seats = new SeatAssignment()
seats.A1 = 'mohammad'
seats.A2 = 'amir'
seats.A3 = 'john'
seats.A4 = 'alex'

//? static property
// global variable in all class of main class
class Journey{
    private static _activeJourney: number = 0;

    start(){ Journey._activeJourney++ }
    stop(){ Journey._activeJourney-- }
 
    static get activeJourney(){
        return Journey._activeJourney

    }

}

let journey1 = new Journey().start()
let journey2 = new Journey().start()
console.log(Journey.activeJourney)

//? inheritance
// parent/super
// child/derived/sub
class animal{
    constructor(
        public name: string,
        public type: string
    ) {

    }

    eating(){
        console.log('eating')
    }
}
class bird extends animal{
    constructor(
        name: string,
        type: string,
        public height: number

    ){super(name, type)}
}
// make
let al = new bird('fly', 'fli', 12)
al.eating()

//? inheritance: override
class Sheep extends animal{
    // by default call animal constructor

    override eating(): void {
        console.log(this.name + 'eating')

    }
}

let sheep = new Sheep('sheep', 'pestandar')
sheep.eating()

//? polymorphism
abstract class Person{
    
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        public gender: boolean,
    ){ }

    get fullName(){ // to access just child of class
        return this.firstName + " " + this.lastName
    }

    //? protected: // to access just child of class
    protected walk(){
        console.log('walk')
    }

    //? abstract
    // abstract deathTime(): void; // just in child can use
}

class Teacher extends Person{
    override  get fullName(): string { return 'teacher ' + super.fullName }
}
class Student extends Person{
    override  get fullName(): string { return 'student ' + super.fullName }
}
class Police extends Person{
    override  get fullName(): string { return 'police ' + super.fullName }
}
class FireFighter extends Person{
    override  get fullName(): string { return 'firefighter ' + super.fullName }
}

function printName(people: Person[]){
    for (let person of people)
        console.log(person.fullName)
}

printName([
    // new Person('amir','john',0,true),// abstract class
    new Teacher('amir','john',0,true),
    new FireFighter('amir','john',0,true),
    new Police('amir','john',0,true),
    new Student('amir','john',0,true),
])

/*
amir john
teacher amir john
firefighter amir john
police amir john
student amir john
*/

//? abstract, interface
// we have no abstract in js
abstract class abstractCalender{
    constructor(public name: string){

    }

    abstract addEvent(): void
    abstract removeEvent(): void
}
// we have no interface in js
// full conceptual with no logic
interface interfaceCalender{
    name: string;
    addEvent(): void;
    removeEvent(): void;

}
//? how to use interface: 'implements'
class googleCalender implements interfaceCalender{
    constructor(public name: string){

    }
    addEvent(): void {};
    removeEvent(): void {};
}