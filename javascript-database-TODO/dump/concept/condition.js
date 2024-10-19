/**
 * Conditions in javascript
 */

//* Boolean value
{
    true;
    false;
}

//* Truthy and falsy value
{
    // Truthy
    true;
    -Infinity, -10.5, -2, -1, 1, 2, 55.23, 3423432432n, Infinity; // non-zero numeric value
    'something', `text`, "0", '23423'; // non-empty string value
    [], {}, [1, 2, 3, 'ali'], {key: 'value'}; // Empty or non-empty object and array

    // Falsy
    false;
    0, -0, 0n; // number 0
    '', ``, ""; // empty string value
    null, undefined, NaN; // / absurd value
}

//* Switch case statement
{
    switch ('day') {
        case 'Monday': // fist case
            // Your Code
            break;

        case 'Tuesday': // second case
            // Your Code
            break;

        default: // else case
            // Your Code
            break;
    }
}

//* If statement
{
    // (if) statement
    if (true) {
        // Your Code
    }
    
    // (if else) statement
    if (true) {
        // Your Code
    } else {
        // Your Code
    }
    
    // (if else if) statement
    if (false) {
        // Your Code
    } else if (true) {
        // Your Code
    } else {
        // Your Code
    }
}