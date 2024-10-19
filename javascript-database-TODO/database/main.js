import * as random from "./utils/random.js";
import * as json from "./utils/concept/json.js"
import * as mongodb from "./utils/concept/mongodb.js"
import * as ts from "./utils/concept/typescript.ts"

// #random
// How to get random index of array
random.getRandomIndexOfArray()
// How to get random number between two number (Integer)
random.getRandomInteger()

// #json, #JSON
json.json // Description about JSON
// How to convert string to JSON #string:convertTo:string
json.parse___convertToJSON()
// How to convert JSON to string #json:convertTo:string
json.stringify___convertToString()
// How to check isJSON #validation:json
json.isJSON()

// #mongodb, #database
// How to connect database
mongodb.connection()
// How to Inset data using 'insertOne(), insertMany()'
mongodb.selfInsertMany()
mongodb.selfInsertOne()
// How to find data in database | How to query in database
mongodb.selfFind() // all
mongodb.selfFind({firstName: 'amir'}) // find by key-value
mongodb.selfFind({"address.city": "tehran"}) // find by key-value: nested object
mongodb.selfFind({age: {$gte: 20}}) // find by compaction operation: $eq: ==, $ne: !=, $gt: >, $gte: >=, $lt: <, $lte: <=, $in: should be in array [item1, item2, ...], $nin: should not be in array [item1, item2, ...]
mongodb.selfFindOne() // return firs data that you find not all data
// How to delete data in database using 'deleteOne(), deleteMany()'
mongodb.selfDeleteOne()
mongodb.selfDeleteMany()
// How to count number of data in database
mongodb.selfCountDocuments()
// How to get data and then remove it from database
mongodb.selfFindOneAndDelete()
mongodb.selfFindAndUpdate()
// How to update data in database
mongodb.selfUpdateMany({
    age: {$gte: 30}, //DO: change all age that grater than 30 to 30 not more
    $set: {age: 30} // change value of key: using $set
})
mongodb.selfUpdateMany({
    job: 'developer', // add item to an array
    $push: {skillsArray: 'typescript'} // push an item to array: using $push
})
mongodb.selfUpdateMany({
    job: 'developer', // remove item from an array
    $pull: {skillsArray: 'typescript'} // pull an item to array: using $pull
})
mongodb.selfUpdateMany({
    cash: {$eq: 0}, // find data that cash = 0 and change it to 100_000 as Gift
    $inc: {cash: 100_000} // +sub and -add: using $inc
})
mongodb.selfUpdateMany({
    age: {$ne: null}, // select all age to change the keys
    $rename: {age: "userAge"} // change key: using $rename
})
mongodb.selfUpdateMany({
    _id: {$ne: null}, // select every data
    $unset: {address: 1} // remove that key
})
mongodb.selfUpdateMany({},{ // show all data
        projection: { // don't show this parameter
            age: 0,
            name: 0
        }
    })
mongodb.selfUpdateMany({},{ // show all data
    skip: 5, // don't show 5 first record
    limit: 10, // show just 10 record
    sort: {_id: -1} // -1, 1
})
mongodb.selfUpdateOne()

// Aggregate
userCollection.aggregate([]).toArray() // return all data
userCollection.aggregate([
    {
        $match: {
            firstName: 'amir' // if firsName === show the result
        },
        $project: {
            age: 0 // don't show it in result
        },
        $addField:{
            "lastName": "family" // convert key name
        }
    }
]).toArray()

// #typescript
// How to config typescript tsconfig.json
ts.tsconfig.description
ts.tsconfig.file
// datatypes
ts.number
ts.string
ts.boolean
ts.arrayNumber
ts.arrayString
ts.arrayBoolean
ts.arrayNesting1
ts.arrayNesting2
ts.arrayNesting3
ts.tuple1
ts.tuple2
ts.tuple3
ts.enum1
ts.enum2
ts.functionReturnVoid1
ts.functionReturnVoid2
ts.functionReturn1
ts.functionReturn2
ts.functionReturn3
ts.functionParameter1
ts.functionParameter2
ts.functionParameter3

// Coming soon
// promise
// then() catch()
// #fileSystem, #node:fs,  