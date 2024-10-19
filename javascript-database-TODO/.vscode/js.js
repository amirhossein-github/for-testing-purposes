///----------{ Syntax }------------------------------------------------------------------------------------
function ContinueStatement(){

    step1:
    for (let i = 0; i < len; i++) {
        
        step2:
        for (let ii = 0; ii < len; ii++) {
            
            if (len % len === 0){
                continue step1
            }

        }
        
    }

}



// New New New
//---------------------------------------------------------------------------------
// How to use filter to check list of item
// test which of is equal to 1 and not zero
return Number(n).toString(2).split('').filter((index) => '1'.includes(index)).length


//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------{ Math }----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
function ConvertDecimalToBinary(){

    return Number(n).toString(2)

}



function evenNumber(x) {
    return x % 2 === 0 ? true : false
}
function oddNumber(x) {
    return n % 2 === 0 ? false : true
}

















/**
 *  This function find minimum number between two number
 * 
 * @param {number} x first number
 * @param {number} y second number
 * @returns {number}
 */
export function mathMinimum(x, y){
    //* [Validation]
    if (!Typeof.isRational(x)){
        return new Error(`Uncaught TypeError: x{${'value: ' + x + ' | ' + 'Type: ' + typeof x}} is not a rational`)
    
    }
    if (!Typeof.isRational(y)){
        return new Error(`Uncaught TypeError: y{${'value: ' + y + ' | ' + 'Type: ' + typeof y}} is not a rational`)
    
    }

    return x > y ? y : x;
}

/**
 *  This function find maximum number between two number
 * 
 * @param {number} x first number
 * @param {number} y second number
 * @returns {number}
 */
export function mathMaximum(x, y){
    //* [Validation]
    if (!Typeof.isRational(x)){
        return new Error(`Uncaught TypeError: x{${'value: ' + x + ' | ' + 'Type: ' + typeof x}} is not a rational`)
    
    }
    if (!Typeof.isRational(y)){
        return new Error(`Uncaught TypeError: y{${'value: ' + y + ' | ' + 'Type: ' + typeof y}} is not a rational`)
    
    }

    return x < y ? y : x;
}










//----------{ Syntax v(1) }--------------------------------------------------------------------------------
function divisors(n) {
    result = []
    for (let i = 1; i <= n; i++){
        if (n % i === 0){
            result.push(i)
        }
    }

    return result

}
//----------{ Syntax v(2) }--------------------------------------------------------------------------------
// Optimized
function divisors(n) {
    let result = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            result.push(i);
            if (i !== n / i) {
                result.push(n / i);
            }
        }
    }

    return result.sort((a, b) => a - b);

}
//----------{ Syntax }-------------------------------------------------------------------------------------
function perfectNumber(n) {
 
    // Get all divisors
    let array = divisors(n)

    // Sum all divisor - 
    let start = 0, end = array.length - 1, sum = 0;
    for (let i = start; i < end; i++) {
        sum += array[i];
    }

    // Result
    return sum === n ? true : false;
}
//----------{ Syntax }-------------------------------------------------------------------------------------
function primeNumber(n){

    // If less then zero
    if (n <= 1){
        return false
    }

    // Check from 2 to n-1
    for (let i = 2; i < n; i++){
        if (n % i === 0){
            return false
        }
    }

    return true

}

//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------{ Function }------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
// how to short function
[].find((item) => { if (item == 'example'){ return item }});
[].find(item => item == 'example'); // shorter

// Function in parameter
function func(param){
    console.log(param)
}
function test(param, func) {
    let ali = func('ali')
}

// default value of param
function DefaultValueOfParameter(string = 'something', number = 125, isMale = true){

    return true

}
//----------{ Syntax }-------------------------------------------------------------------------------------
function DecelerationFunction(param1, param2, paramNth){
    return param1, param2, paramNth
}
// func(argument1, argument2, argumentNth)
//----------{ Syntax }-------------------------------------------------------------------------------------
function ExpressionFunction() {
    let seyHello = function(){
        console.log('hello')
    }

    seyHello()
}
//----------{ Syntax }-------------------------------------------------------------------------------------
function ArrowFunction(){
    let seyHello1 = () => console.log('hello')
    let seyHello2 = () => {
        console.log('hello')
    }


    seyHello1()
    seyHello2()
}

// IIFE = > Immediately Invoked Function Espressoin
// use to sperate global and local var
// it's old and useless to day becase
// we have scope
(function(a,b,c){
    // do something
})(1,2,3)
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------{ Loop }----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
for (const element of array) {
    element
}

arr.forEach((element) => console.log(element));

// object for
for (const keys in amir){
    console.log(
        keys, ": ", amir[keys]
    )
}

// for loop in array
let a = [1, 2, 3, 4, 5]
for (let i = 0; i < a.length; i++){
    console.log(a[i])
}
function forLoop(){
    //----------{ Syntax }---------------------------------------------------------------------------------
    for ( /* initialization */ let i = 0; /* condition */ i > 10; /* conditionSteps */ i += 2){
        // Your Code
    }

}
function whileLoop(){
    
    //----------{ Syntax }---------------------------------------------------------------------------------
    /* initialization */
    while(/* condition */ true){
        // Your Code

        /* conditionSteps */
    }

}
function DoWhileLoop(){

    //----------{ Syntax }---------------------------------------------------------------------------------
    /* initialization */
    do {
        // Your Code

        /* conditionSteps */
    } while(/* condition */ true)

}

//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------{ Object }--------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
// defindeProperty ??? i dont know
Object.defineProperties(amir,
    "newnew", {
        value: 'amir',
        configurable: false,
        enumrable: true,
        writeable: true
    }
)

// cant change object key or var
Object.freeze(amir)

// show object on string mode
// console.log()
JSON.stringify(amir)
JSON.stringify(amir, null, 4)
// convert to object
JSON.parse(
    JSON.stringify(amir)
)

//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------{ Operators }-----------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------{ Array }---------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------


function RemoveDuplicateIndexInArray(array){

    //----------{ Syntax }---------------------------------------------------------------------------------
    return [...new Set(array)]

}
function SortIntergerArray(array){

    //----------{ Syntax }---------------------------------------------------------------------------------

    // Sort the array from low to high
    array = array.sort(function(a, b){return a - b; });

    // Sort the array from high to low
    // numbers = numbers.sort(function(a, b){return b - a; });

    return array


//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------{ Concepts }------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------{ Object compair }------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------

//  try catch
try {
    myvar
} catch (error) {
    console.log(error)
    console.log(error.message)
}

// throw
if (1 !== 2){
    throw "Error: not equal"
}

// try {

// } catch {

// } finally {
    
}
// ----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------{ string }------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------
''.trim()
''.trimStart()
''.trimEnd()






//  Send request using console


clear(); await fetch("http://localhost:3000/api/products/", {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "no-cache",
      "pragma": "no-cache",
      "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "none",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1"
    },
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": '',
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  })

  // to convert to valid data
  .then(response => response.json()).then(data=>{ console.log(data); })

















































































