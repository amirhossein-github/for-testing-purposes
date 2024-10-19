// import { Typeof } from "./validation.js";
/**
 * This function compares two objects
 * 1. Each input object: {key: value, key: value, ...}
 * 2. Output object : {true: 0, false: 0}
 * 
 * @param {object} obj1 Correct values 
 * @param {object} obj2 Input values
 * @returns {object} As stated above
 */
export function comparTwoObjects(obj1, obj2){
    // //* [Validation]
    // if (!Typeof.isObject(obj1)){
    //     return new Error(`Uncaught TypeError: obj1{${'value: ' + obj1 + ' | ' + 'Type: ' + typeof obj1}} is not a object`)
    
    // }
    // if (!Typeof.isObject(obj2)){
    //     return new Error(`Uncaught TypeError: obj2{${'value: ' + obj2 + ' | ' + 'Type: ' + typeof obj2}} is not a object`)
    
    // }

    // 1) Define the necessary variable
    let right = 0
    let wrong = 0

    // 2) Loop in each key
    for (let key in obj1){

        // 3) The answers were the same
        if (obj1[key] === obj2[key]){
            right++

        // 4) The answers were not the same
        } else {
            wrong++
        }
    }

    // 5) Return result
    return {
        true: right,
        false: wrong
    } 
}