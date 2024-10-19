/**
 * Date:
 * 2023/09/15
 * 
 * Reference:
 * - [RFC](https://datatracker.ietf.org/doc/html/rfc8259)
 * 
 * About:
 * - JSON: JavaScript Object Notation
 * - Data Type: strings(UNICODE), numbers, booleans, null
 * - Data Structure: object, array
 * - Media Type: "application/json"
 * - Name: Must be lowercase
 * - Name don't support: false, null, true, object, array, string, number
 * - Number don't support: NaN, +-Infinity
 * - Bad characters: ", \
 * -  File extension: .json
 * 
 * Example 1:
 * ```json
 * {
 *   "Image": {
 *     "Width":  800,
 *     "Height": 600,
 *     "Title":  "View from 15th Floor",
 *     "Thumbnail": {
 *       "Url": "http://www.example.com/image/481989943",
 *       "Height": 125,
 *       "Width":  100
 *     },
 *     "Animated" : false,
 *     "IDs": [116, 943, 234, 38793]
 *   }
 * }
 * ```
 * 
 * Example 2:
 * ```json
 * [
 *   {
 *      "name": "javascript",
 *      "age": 21
 *   },
 *   {
 *     "name": "json",
 *     "age": 40
 *   }
 * ]
 * ```
 * 
 * Example 3:
 * ```json
 * 42
 * ```
 */
export const json = 'JSDocs Description'

// Valid parse
export function parse(){
    JSON.parse(1) // number
    JSON.parse(true) // boolean
    JSON.parse(null) // null
    JSON.parse('"String"') // string
    JSON.parse('[1, "str", true, {"key": "value"}]') // array
    JSON.parse('{"key": "value", "array": []}') // object
}
// Convert string to the JSON object
export function parse___convertToJSON(str){
    return JSON.parse(str)

}
// Call function on JSON (link map in array)
export function parse___callFunctionOnJSON(){
    const json = '[{"name": "apple", "age": 25}, {"name": "google", "age": 100}]'

    JSON.parse(json, (key, value) => {
        console.log(`${key}::: ${value}`)
    })
}


export function stringify___convertToString(json){
    return JSON.stringify(json)

}
export function stringify___callFunctionOnJSON(json){
    JSON.stringify(json, (key, value) => {
        console.log(`${key}::: ${value}`)
    })

}


export function isJSON(json){
    try {
        JSON.parse(json)
        return true
        
    } catch (error) { return false }
}