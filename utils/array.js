import { Typeof } from "./validation"

/**
 * This function takes an array and returns one of its elements randomly
 * - Option: If the 'removeIndex' is equal to true, the element is removed from the array.
 * 
 * @param {array} array The desired array
 * @param {boolean} removeIndex Remove the random element
 * @returns {*} A random element of array
 */
export function getRandomIndexOfArray(array, removeIndex=false){
    //* [Validation]
    if (!Typeof.isArray(array)){
        return new Error(`Uncaught TypeError: array{${'value: ' + array + ' | ' + 'Type: ' + typeof array}} is not a array`)

    }
    if (!Typeof.isBoolean(removeIndex)){
        return new Error(`Uncaught TypeError: removeIndex{${'value: ' + removeIndex + ' | ' + 'Type: ' + typeof removeIndex}} is not a boolean`)

    }

    // 1) Get random element of removeIndex
    let randomIndex = Math.floor(Math.random() * array.length)
    let randomElement = array[randomIndex]

    // 2) If "removeIndex=true", remove the element from the array
    if (removeIndex){
        array.splice(randomIndex, 1)
    }

    return randomElement
}
