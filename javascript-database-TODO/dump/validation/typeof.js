/**
 * This class is created to validate the data type
 */
export class Typeof {

    /**
     * This function checks if your data is boolean or not
     * 
     * @param {*} x your data to check
     * @returns {boolean}
     */
    static isBoolean(x){
        return true ? typeof x === 'boolean' : false
    }
    
    /**
     * This function check if your data is array or not
     * 
     * @param {*} x your data to check
     * @returns {boolean}
     */
    static isArray(x){
        return Array.isArray(x)
    
    }

    /**
     * This function check if your data is object or not
     * 
     * @param {*} x your data to check
     * @returns {boolean}
     */
    static isObject(x){
        return (
            // typeof
            (typeof x === 'object') &&
    
            // array
            (!Typeof.isArray(x)) &&
    
            // null value
            (x !== null)
        )
    }
     /**
     * This function check if your data is integer number or not
     * 
     * @param {*} x your data to check
     * @returns {boolean}
     */
    static isInteger(x){
        return Number.isInteger(x) || x === Infinity || x === -Infinity

    }

    /**
     * This function check if your data is rational number or not
     * 
     * @param {*} x your data to check
     * @returns {boolean}
     */
    static isNumber(x){
        return !isNaN(x) && Typeof.isFloat(x) || Typeof.isInteger(x)
    
    }

    /**
     * This function check if your data is float number or not
     * 
     * @param {*} x your data to check
     * @returns {boolean}
     */
    static isFloat(x){
        return !isNaN && x % 1 !== 0

    }
}