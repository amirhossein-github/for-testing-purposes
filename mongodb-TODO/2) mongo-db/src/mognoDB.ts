import { Db } from "mongodb"
import { ConnectToMongoDB } from "./design/singleTon";

const jsonData = {
    firstName: "amir",
    lastName: "john",
    age: 25,
}

console.log(`[INFO][node mongoDB.js]: start`);

async function mainClass(){
    // 1) Connect to the database using class 'ConnectToMongoDB'
    const db: Db | undefined = await new ConnectToMongoDB().Get()
    console.log(`[INFO][mongodb.connect()]: success`);

    // Validation:
    if (db === undefined){
        console.log(`[ERROR][return undefined]: loop was closed`);
        return
    }

    // 2) Get collection 'user'
    const userCollection = db.collection("user")
    
    // 3) Working with data
    //* Insert data
    await userCollection.insertOne(jsonData)

    //* Delete all data
    // await userCollection.deleteMany({})
    
    // 4) Show all data
    await userCollection.find({}).toArray().then(console.log)
}; mainClass()






































































/*

    userCollection.deleteMany({}) // remove all data

*/
/* To stat mongodb
    sudo systemctl unmask mongod
    sudo service mongod start

    sudo service mongod stop
*/
// async function normal(): Promise<void>{
//     // 1) Make mongodb client
//     const mongodb = new MongoClient('mongodb://localhost:27017/mongodb-tutorials')

//     // 2) connection
//     await mongodb.connect()
//     console.log(`[INFO][mongodb.connect()]: success`);

//     // 3) setup database
//     const db: Db = mongodb.db()
//     const userCollection = db.collection("user")

//     // 4) Send data to database
//     userCollection.insertOne(jsonData)

//     // 5) Show all the data
//     await userCollection.find({}).toArray().then(console.log)
// }; normal()