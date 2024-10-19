/**
 * Operator in javascript
 */

//* Ternary operator
{
    let username = 'admin', password = 'admin123';
    let condition = username == 'admin' && password == 'admin123';
    let isLogIn = condition ? true : false;
}

//* Nullish operator
{
    // The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
    
    undefined ?? true // true
    null ?? true // true

    false ?? false // false
    '' ?? false // ''
    123 ?? false // 123
    true ?? false // true
}

//* Logical operation
//* And &&
//* Or ||
{
    // And && 
    // First false retune Or Last true retune
    //  A   &&   B  =   Output
    true,  true,  true;
    true,  false, false;
    false, true,  false;
    false, false, false;

    // Or || 
    // First true retune Or Last false retune
    //  A   ||   B  =   Output
    true,  true,  true;
    true,  false, true;
    false, true,  true;
    false, false, false;

    // E.G. 
    // And &&
    1 && false;    // false
    '' && true;    // ''
    'text' && 32n; // 32n

    // Or ||
    true || null;   // true
    23.23 || NaN;   // 23.23
    'ali123' || {}; // 'ali123'

    // Complex
    2 + 2 < 3 && '2' + 2 || 3 && 2 - 1 * 3; // -1
}

//* Spread Operator
{
    // 1
    new Array(...'test');

    // 2
    function defaultFunction(a, b, c, d){
        return 'defaultFunction'    
    };
    defaultFunction(...'1234');
}

//* Rest Operator
{
    // 1
    function defaultFunction(...numbers){
        return numbers.reduce(
            (res, a) => res + a, 0
        )
    }
    defaultFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 0) // 45
}