// import { Typeof } from "./validation"

/**
 * This function takes an array and returns one of its elements randomly
 * - Option: If the 'removeIndex' is equal to true, the element is removed from the array.
 * 
 * Reference: 
 * - {@link https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/}
 * - {@link https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array}
 * 
 * @param {array} array The desired array
 * @param {boolean} removeIndex Remove the random element
 * @returns {*} A random element of array
 */
export function getRandomIndexOfArray(array, removeIndex=false){
    //* [Validation]
    // if (!Typeof.isArray(array)){
    //     return new Error(`Uncaught TypeError: array{${'value: ' + array + ' | ' + 'Type: ' + typeof array}} is not a array`)

    // }
    // if (!Typeof.isBoolean(removeIndex)){
    //     return new Error(`Uncaught TypeError: removeIndex{${'value: ' + removeIndex + ' | ' + 'Type: ' + typeof removeIndex}} is not a boolean`)

    // }

    // 1) Get random element of removeIndex
    let randomIndex = Math.floor(Math.random() * array.length)
    let randomElement = array[randomIndex]

    // 2) If "removeIndex=true", remove the element from the array
    if (removeIndex){
        array.splice(randomIndex, 1)
    }

    return randomElement
}

/**
 * This function returns a random number between two numbers
 * 
 * @param {number} min The lowest number
 * @param {number} max The highest number
 * @returns {number} random number
 */
export function getRandomInteger(min, max) {
    //* [Validation]
    // if (!Typeof.isRational(min)){
    //     return new Error(`Uncaught TypeError: min{${'value: ' + min + ' | ' + 'Type: ' + typeof min}} is not a rational`)
    // }
    // if (!Typeof.isRational(max)){
    //     return new Error(`Uncaught TypeError: max{${'value: ' + max + ' | ' + 'Type: ' + typeof max}} is not a rational`)
    // }
        

    // 1) Get random number
    const randomNumber = Math.random()

    // 2) Set range
    const range = randomNumber * (max - min + 1)

    // 3) Set start point
    const setStartPoint = range + min

    // 4) Convert to integer number
    const result = Math.floor(setStartPoint)

    // 5) return result
    return result
}