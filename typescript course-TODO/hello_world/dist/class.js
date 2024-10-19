"use strict";
class Account {
    constructor(id, name, _balance) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        this._balance += amount / this.calTax();
    }
    getBalance() {
        return this._balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(userInput) {
        if (userInput <= 0)
            throw new Error("Invalid value");
        this._balance = userInput;
    }
    calTax() {
        return 20;
    }
}
let account = new Account(0, 'amir', 1000);
account.deposit(10000);
console.log(account.getBalance());
console.log(account.balance);
account.balance = 20;
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = 'mohammad';
seats.A2 = 'amir';
seats.A3 = 'john';
seats.A4 = 'alex';
class Journey {
    start() { Journey._activeJourney++; }
    stop() { Journey._activeJourney--; }
    static get activeJourney() {
        return Journey._activeJourney;
    }
}
Journey._activeJourney = 0;
let journey1 = new Journey().start();
let journey2 = new Journey().start();
console.log(Journey.activeJourney);
class animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    eating() {
        console.log('eating');
    }
}
class bird extends animal {
    constructor(name, type, height) {
        super(name, type);
        this.height = height;
    }
}
let al = new bird('fly', 'fli', 12);
al.eating();
class Sheep extends animal {
    eating() {
        console.log(this.name + 'eating');
    }
}
let sheep = new Sheep('sheep', 'pestandar');
sheep.eating();
class Person {
    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log('walk');
    }
}
class Teacher extends Person {
    get fullName() { return 'teacher ' + super.fullName; }
}
class Student extends Person {
    get fullName() { return 'student ' + super.fullName; }
}
class Police extends Person {
    get fullName() { return 'police ' + super.fullName; }
}
class FireFighter extends Person {
    get fullName() { return 'firefighter ' + super.fullName; }
}
function printName(people) {
    for (let person of people)
        console.log(person.fullName);
}
printName([
    new Teacher('amir', 'john', 0, true),
    new FireFighter('amir', 'john', 0, true),
    new Police('amir', 'john', 0, true),
    new Student('amir', 'john', 0, true),
]);
class abstractCalender {
    constructor(name) {
        this.name = name;
    }
}
class googleCalender {
    constructor(name) {
        this.name = name;
    }
    addEvent() { }
    ;
    removeEvent() { }
    ;
}
//# sourceMappingURL=class.js.map