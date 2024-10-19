/**
 * Classes in javascript
 */

//* Create new class
{
    class User {
        x;

        setVariable(input){
            this.x = input
        }

        getVariable(){
            return this.x
        }
    }
}

//* Constructor
{
    class User {
        name;
        family;

        constructor(firstName, lastName){
            this.name = firstName
            this.family = lastName
        }
    }
}

//* Access modify
//* Public and private variable
{
    class User {
        #username;
        #age;
        note;

        constructor(username, age, note){
            this.#username = username
            this.#age = age
            this.note = note
        }
    }

    const ali = new User('john', 25, 'love you')
    console.log(ali.username, ali.age, ali.note)
}

//* Getter and setter
{
    class User {
        #username;
        #age;
        note;

        constructor(username, age, note){
            this.#username = username
            this.#age = age
            this.note = note
        }

        get username(){
            return this.#username
        }

        set username(value){
            if (value === ''){
                return

            } else {
                this.#username = value

            }
        }
    }

    const ali = new User('john', 25, 'love you')
    console.log(ali.username, ali.age, ali.note)
    ali.username = 'man'
    console.log(ali.username, ali.age, ali.note)
}

//* Inheritance
//* super()
{
    class User {
        name;
        family;

        constructor(firstName, lastName){
            this.name = firstName
            this.family = lastName
        }
    }

    class male extends User{
        constructor(firstName, lastName){
            super(firstName, lastName) // call User: constructor()
        }

        gender(){
            return 'male'
        }
    }

    const test = new male()
    test.family
    test.name
    test.gender()
}

//* Static methods
{
    class exStatic {
        static #staticValue = [];

        constructor(){
            this.#init()
        }

        static count(){
            return this.#staticValue
        }

        #init(value){
            exStatic.#staticValue.push('test1')
            exStatic.#staticValue.push('test2')
            exStatic.#staticValue.push('test3')
            exStatic.#staticValue.push('test4')
        }

        static len(){
            return exStatic.#staticValue.length
        }
    }

    new exStatic() // to run init() method
    console.log(exStatic.len())
}

//* Polymorphism
{
    class User {
        #username;
        #age;
        note;

        constructor(username, age, note){
            this.#username = username
            this.#age = age
            this.note = note
        }

        get username(){
            return this.#username
        }

        set username(value){
            if (value === ''){
                return

            } else {
                this.#username = value

            }
        }

        isLogin(){
            return false
        }
    }

    class test extends User{
        constructor(username, age, note){
            super(username, age, note)
        }

        // Polymorphism
        isLogin(){ 
            return true
        }
    }

    console.log(new test('amir', 23, 'hello').isLogin())
}