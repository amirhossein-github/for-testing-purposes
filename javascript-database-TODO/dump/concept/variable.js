/**
 * Variable in javascript
 */

//* Naming variables
//* Standard format
{
    // Start With: 'Dollar Sign', 'lower and upper case letter', 'underscore'
    const $variableName = ''
    const _variableName = ''
    const variableName = ''
    const VariableName = ''
    const #variableName = '' // private variable in class

    /* can't be
        Space: mom dad = 'family'
        Reserved Keywords: [if, else, NaN, null, e.g.]
        Start With Number: 12Name = 'ali'
        Using Symbol: symbol%: 'test 1 2 3'
    */

    // format
    const snake      = 'amir_hossein_khateri'
    const camelCase  = 'amirHosseinKhateri'
    const PascalCase = 'AmirHosseinKhateri'
    const UPPERCASE  = 'AMIRHOSSEINKHATERI'
    const lowercase  = 'amirhosseinkhateri'
}

//* Global and Local Variable
{
    // Its outside of all scope
    const globalVariable = '3 2 1'

    {
        // local variable inside of scope
        const localVariable = '1 2 3'
    }
}

//* How to get variable name
{
    const variable = ':)'
    Object.keys({variable})[0]
}