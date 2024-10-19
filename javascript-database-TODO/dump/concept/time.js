/**
 * Time in javascript
 */

//* Do something every x second
//* setInterval()
{
    // 1) Using setInterval()
    setInterval(

        // 1, call back function
        function(){
            console.log('hello')
        },

        // 2, call every x millisecond
        1000 
    )


}

//* Do something after x second
{

    // 1) Using setTimeout
    setTimeout(
        
        // 1, call back function
        function(){
        console.log('hello')
        },
    
        // 2, call after x millisecond
        1000
    )

}
// do call back function after 1s or 1000ms
