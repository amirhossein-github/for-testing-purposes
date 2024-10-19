
/**
 * This function check if your data is rational number or not
 * 
 * @param {*} x your data to check
 * @returns {boolean}
 */
export function validation_datatype_rational(x){
    return validation_datatype_float(x) || validation_datatype_integer(x)
}

/**
 * This function check if your data is float number or not
 * 
 * @param {*} x your data to check
 * @returns {boolean}
 */
export function validation_datatype_float(x){
    return Number(x) === x && x % 1 !== 0;
}

/**
 * This function check if your data is integer number or not
 * 
 * @param {*} x your data to check
 * @returns {boolean}
 */
export function validation_datatype_integer(x){
    return Number.isInteger(x)
}

/**
 * This function check if your data is object or not
 * 
 * @param {*} x your data to check
 * @returns {boolean}
 */
export function validation_datatype_object(x){
    return (
        // typeof
        (typeof x === 'object') &&

        // array
        (!validation_datatype_array(x)) &&

        // null value
        (x !== null)
    )
}

/**
 * This function checks if your data is boolean or not
 * 
 * @param {*} x your data to check
 * @returns {boolean}
 */
export function validation_datatype_boolean(x){
    return true ? typeof x === 'boolean' : false
}

/**
 * This function check if your data is array or not
 * 
 * @param {*} x your data to check
 * @returns {boolean}
 */
export function validation_datatype_array(x){
    return Array.isArray(x)

}