/**
 * Arrays in javascript
 */

//* How to create a new array
{
    [];
    Array();
    new Array();
    new Array(12); // [ <12 empty item> ]
    new Array('index1', 'index2', 'index3');
    new Array(..."abcdefghijklmnopqrstuvwxyz"); // ['a', 'b', 'c', ...]
    new Array(...'123', ...'456', ...'789');

    // destructuring
    const[,,newArray] = ['Aa', 'Bb', 'Cc', 'Dd'] // 'Cc'
}

//* Examples of arrays
{
    [1, 2, 3, 4, 5, 6];
    ['ali', 'muhammad', 'google', 'github'];
    [1, true, null, undefined, NaN, 'func()', {key: 'value'}];
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
}

//* Array validation
{
    Array.isArray([]);
}

//* Range of arrays
//* The maximum range of an array is (4294967296) === (2 ** 32)
//* Invalid range of array 
    // 1) (negative number) === (form -Infinity to -1)
    // 2) (floating point number) === (2.23)
{
    // maximum range of array
    new Array(2 ** 32 - 1) // -1: Because we start from zero, not from one

    // Invalid array length
    new Array(-1)
    new Array(23.5)
}

//* How to get the array size
//* How to set the array size
//* How to set the array size conditionally
{
    // get
    ['test', 1, 100, true].length;

    // set
    [].length = 5;

    // conditional set
    if (true){
        [].length = 10; // the extra elements are deleted
    }
}

//* How to add and remove item from arrays
//* shift(), unshift(), splice(), push(), pop()
{
    // Add and remove to the beginning of the array
    [].unshift();
    [].shift();

    // Add and remove to the middle of the array
    [/* Your array */].splice(0 /* number of index */, 1);

    // Add and remove to the end of the array
    [].push();
    [].pop();
}

//* Search the array
//* Return (Index, Element, Boolean)
{
    // Return (Index)
    // return (first and last) index of element : search by value
    {
        [].indexOf('item'); // It starts searching from the beginning of the array and returns its index as soon as it finds the first similar item.
        [].lastIndexOf('item'); // It starts searching from the end of the array and returns its index as soon as it finds the first matching item.
    }
    // return (first and last) index of element : search by condition
    {
        [].findIndex(item => item.length >= 0); // Returns the first index whose size is greater than zero
        [].findLastIndex(item => item.length >= 0); // Returns the last index whose size is greater than zero
    }

    // Return (Element)
    // return (first) element of array : search by condition
    {
        [].find(element => element < 0); // Returns the first index whose size is lower than zero
    }
    // return (all) element of array : search by condition
    {
        [].filter(element => element > 0); // Return [1, 2, 3, 5], numbers are bigger than 0
    }

    // Return (Boolean)
    // return (boolean) : search by value
    {
        [].includes('item');
    }
    // return (boolean) : search by condition
    {
        [].some(item => item.length > 0); // true: If one of the elements was acceptable to the condition
        [].every(item => item.length > 0); // true: If all of the elements was acceptable to the condition
    }
}

//* Get the (last and first) elements of the array
{
    // Last element
    // one item
    [].at(-1);
    // more than one
    [].slice(-2);

    // First element
    // one item
    [].at(1);
    // more than one
    [].slice(0, 2);
}

//* How to merge two arrays
{
    [].concat(new Array(10));
}

//* Operations on array elements
{
    // Using map method
    {
        [].map(index => index + 'test'); // return new array with new elements

        // Or
    
        function adder(element){
            return element + 'test'
        }
        [].map(adder);
    }

    // Using loops
    {
        for (let i = 0; i < [].length; i++){
            [][i] // your operation
        }
    }

    // Using reduce method
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].reduce((per, current) => per + current); // 45

}

//* Sort the array
{
    // By default, the array is sorted alphabetically
    [3, 4, 12, 3, 4, 6, 20, 33, 11].sort(); // [11, 12, 20, 3, 3, 33, 4, 4, 6]

    // Sort by number (integer and float)
    // short mode
    [3, 4, 12, 3, 4, 6, 20, 33, 11].sort((a, b) => a - b); // low to high
    [3, 4, 12, 3, 4, 6, 20, 33, 11].sort((a, b) => b - a); // high to low
    // long mode
    [3, 4, 12, 3, 4, 6, 20, 33, 11].sort((a, b) => {
        if(a > b) return 1;
        if(a === b) return 0;
        if(a < b) return -1;
    });
}

//* How to use split and join in array
//* Convert string to array
//* Convert array to string
//* split(), join()
{
    // use split and join
    "a, b, c, d".split(', '); // ['a', 'b', 'c', 'd']
    ['a', 'b', 'c', 'd'].join(', '); // "a, b, c, d"

    // split with: spread operator
    [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

    // using for loop
    let result = '';
    let array = [...'this is testy text']
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
}

//* How to reverse an array
{
    [1, 2, 3].reverse(); // [3, 2, 1]
}

//* How to copy an array
{
    new Array(...[]); // []: It means the array that we want to copy
}