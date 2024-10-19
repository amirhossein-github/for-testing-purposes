/**
 * Concept in javascript
 */

//* Hosting
{
    // total code
    x = 10
    func()
    function func(){ return 'f' }
    var x = 20

    // when interpret the code
    // 1) first of all do initialization
    var x
    function func(){ return 'f' }

    // 2) second deceleration and call
    func()
    x = 10
    x = 20
}

//* Closure
{
    // function that return new function
    function foo(){
        let x = 0
        return function bar(){
            return ++x
        }
    }

    // stor it in const
    const counter = foo()

    // every time you call it counter++
    counter() // 1
    counter() // 2
    counter() // 3
    counter() // 4
    counter() // 5
    counter() // 6
    console.log(counter()) // 7
}

//* Sync and ASync
//* Promise()
{
    // Model 1
    {
        // make new promise
        const getData = new Promise(function(resolve, reject){
            
            // 1) send request to the server and wait for response
            let data = 'request to the server'
    
            // 2) control
            if (data === 'success'){
                resolve(data)
    
            } else {
                reject(new Error('fail to fetch data'))
    
            }
        })
    
        // If success
        getData.then((data) => {
    
        // If get error to send request
        }).catch((err) => {
    
        // Do this under any circumstances
        }).finally(() => {
    
        })
    }
   
    // Model 2
    // Get data from promise with out then/catch
    {
        async function main() {
            try {
                const user = await getData()
                return user
            } catch (err) {
                console.log(err)
            }
        }

        console.log(main()) // [{},{},{}]
    }
}

//* Module
{
    // 1)
    '<script src="./module.js"></script>'
    '<script src="./x.js"></script>'
    '<script src="./methods.js"></script>'
    '...'
    
    // 2)
    '<script src="./module.js" type="module"></script>'
}

#javascript #concept #blocking and #non-blocking
```javascript
// blocking
console.log('string1')
console.log('string2')
console.log('string3')
console.log('string4')
fs.readFileSync() // sync

// non-blocking
fs.readFile() // async
```
