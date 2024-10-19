/**
 * Objects in javascript
 */
// I use it in code
let defaultObject = {}

//* How to create a new array
{
    {};
    Object();
    new Object();
    new Object({key: 'value'});

    // destructuring
    const request = {url: 'https://google.com', method: 'GET'}
    const { url, method } = request
    // url === request.url
    // method === request.method
}

//* Object key name
{
    new Object({
        stringType: 'ali',
        numberType: 123,
        floatType: 3.3,
        bigIntType: 423434234n,
        booleanType: true,
        arrayType: [1, 2, 'asf', false],
        functionType: function(){ return 'test text'},
        objectType: {indentKey: 'value'},
        javascriptKeyWord: {
            for: 'for',
            return: 'return',
            while: 'while',
            if: 'if',
            else: 'else'
        },
        12: '22',
        23.23: '23',
        'stringKey': 'string key',

        // complex key
        [123 + '-' + 150]: '',
    })
}

//* How to add or remove a key to an object
{
    // add key
    defaultObject.role = 'admin';
    defaultObject.stringType = 'string';
    defaultObject.arrayType = [
        {key_1: 'value1'},
        {key_2: 'value2'},
        {key_3: 'value3'}
    ];
    defaultObject['newKey'] = 124;

    // remove key
    delete defaultObject.arrayType;
    delete defaultObject['newKey'];
}

//* Is there a key?
{
    'key'   in Object({key: 'value'}) // true
    'value' in Object({key: 'value'}) // false
}


//* How to copy an object
{
    // 1
    new Object(
        Object.assign({}, defaultObject)
    );
    // 2
    new Object(...defaultObject)
}

//* How to merging objects
//* assign()
{
    new Object(
        Object.assign({}, {}, {})
    );

    Object.assign(
        new Object({key: 'value'}), // our object
        {newKey1: 'value1'}, // new object 1
        {newKey2: 'value2'}, // new object 2
        Object({
            one: 1,
            two: 2,
            three: 3
        })  // new object 3
    )

    Object.assign(
        defaultObject, {newKey: 'value'}
    )

    // remove changes
    delete defaultObject.newKey
}

//* Access to object key and values
{
    Object.keys(defaultObject)
    Object.values(defaultObject)
}