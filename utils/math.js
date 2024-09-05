import { Typeof } from "./validation.js";

/**
 * This function returns a random number between two numbers
 * 
 * @param {number} min The lowest number
 * @param {number} max The highest number
 * @returns {number} random number
 */
export function getRandomInteger(min, max) {
    //* [Validation]
    if (!Typeof.isRational(min)){
        return new Error(`Uncaught TypeError: min{${'value: ' + min + ' | ' + 'Type: ' + typeof min}} is not a rational`)
    }
    if (!Typeof.isRational(max)){
        return new Error(`Uncaught TypeError: max{${'value: ' + max + ' | ' + 'Type: ' + typeof max}} is not a rational`)
    }
        

    // 1) Get random number
    const randomNumber = Math.random()

    // 2) 
    const range = randomNumber * (max - min + 1)

    // 3) 
    const setStartPoint = range + min

    // 4) Convert to integer number
    const result = Math.floor(setStartPoint)

    // 5) return result
    return result
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