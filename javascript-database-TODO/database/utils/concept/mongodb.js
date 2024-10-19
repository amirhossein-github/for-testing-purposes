import { MongoClient, ObjectId } from "mongodb"

const DB = {
    url: 'mongodb://localhost:27017',
    name: 'mongodb-tutorial',
    port: 27017,

}

export async function connection(){
    /* To stat mongodb
        sudo systemctl unmask mongod
        sudo service mongod start

        sudo service mongod stop
    */

    // 1) Make mongodb client
    const mongodb = new MongoClient(DB.url)

    // 2) Try Connection
    await mongodb.connect()
    console.log(`[INFO][mongodb.connect()]: success`);
}

export async function selfInsertOne(){
    // 0) declare data
    const jsonData = {
        firstName: "amir",
        lastName: "john",
        sex: "male",
        age: 25,
        skills: ["javascript", "typescript", "html/css", "mongoDB"],
        identity: "1234567890",
        birth: new Date("01-21-2001"),
        address: {
            province: "Berlin",
            city: "Paris"
        }
    }

    // 1) Make mongodb client
    const mongodb = new MongoClient(DB.url)

    // 2) connection
    await mongodb.connect()
    console.log(`[INFO][mongodb.connect()]: success`);
    // 3) setup database
    const db = mongodb.db(DB.name)
    const userCollection = db.collection("user")

    // 4) Add data
    await userCollection.insertOne(jsonData)

    // 5) Get data from database
    userCollection.find({}).toArray().then(console.log)
}

export async function selfFind(query = {}){
    // 1) Make mongodb client
    const mongodb = new MongoClient(DB.url)

    // 2) connection
    await mongodb.connect()
    console.log(`[INFO][mongodb.connect()]: success`);

    // 3) setup database
    const db = mongodb.db(DB.name)
    const userCollection = db.collection("user")

    // 4) Get data from database
    await userCollection.find(query).toArray().then(console.log)
}

export async function selfFindOne(query){
    // 1) Make mongodb client
    const mongodb = new MongoClient(DB.url)

    // 2) connection
    await mongodb.connect()
    console.log(`[INFO][mongodb.connect()]: success`);

    // 3) setup database
    const db = mongodb.db(DB.name)
    const userCollection = db.collection("user")

    // 4) Get data from database
    await userCollection.find(query).then(console.log)
}

export async function selfInsertMany(){
    // 0) declare data
    const jsonData = [
        {
            firstName: "amir",
            lastName: "john",
            sex: "male",
            age: 25,
            skills: ["javascript", "typescript", "html/css", "mongoDB"],
            identity: "1234567890",
            birth: new Date("01-21-2001"),
            address: {
                province: "Berlin",
                city: "Paris"
            }
        },
        {
            firstName: "AMIR",
            lastName: "JOHN",
            sex: "female",
            age: 35,
            skills: ["javascript", "typescript", "html/css", "mongoDB"],
            identity: "0123987654",
            birth: new Date("10-20-2010"),
            address: {
                province: "XXX",
                city: "XXX"
            }
        }
    ]

    // 1) Make mongodb client
    const mongodb = new MongoClient(DB.url)

    // 2) Connection
    await mongodb.connect()
    console.log(`[INFO][mongodb.connect()]: success`);

    // 3) Setup database
    const db = mongodb.db(DB.name)
    const userCollection = db.collection("user")

    // 4) Add data
    const addData = await userCollection.insertMany(jsonData)

    // 5) Get data from database
    userCollection.find({}).toArray().then(console.log)
}

export async function selfDeleteOne(){
     // 0) declare data
     const jsonData = [
        {
            firstName: "amir",
            lastName: "john",
            sex: "male",
            age: 25,
            skills: ["javascript", "typescript", "html/css", "mongoDB"],
            identity: "1234567890",
            birth: new Date("01-21-2001"),
            address: {
                province: "Berlin",
                city: "Paris"
            }
        },
        {
            firstName: "AMIR",
            lastName: "JOHN",
            sex: "female",
            age: 35,
            skills: ["javascript", "typescript", "html/css", "mongoDB"],
            identity: "0123987654",
            birth: new Date("10-20-2010"),
            address: {
                province: "XXX",
                city: "XXX"
            }
        }
    ]

    // 1) Make mongodb client
    const mongodb = new MongoClient(DB.url)

    // 2) Connection
    await mongodb.connect()
    console.log(`[INFO][mongodb.connect()]: success`);

    // 3) Setup database
    const db = mongodb.db(DB.name)
    const userCollection = db.collection("user")

    // 4) Add data
    await userCollection.insertMany(jsonData)

    // 5) Delete Data
    // await userCollection.deleteOne({firstName: 'amir'})
    // await userCollection.deleteOne({_id: new ObjectId(new Date().getTime()/1000)})
}

export async function selfDeleteMany(){
    // 0) declare data
    const jsonData = [
       {
           firstName: "amir",
           lastName: "john",
           sex: "male",
           age: 25,
           skills: ["javascript", "typescript", "html/css", "mongoDB"],
           identity: "1234567890",
           birth: new Date("01-21-2001"),
           address: {
               province: "Berlin",
               city: "Paris"
           }
       },
       {
           firstName: "AMIR",
           lastName: "JOHN",
           sex: "female",
           age: 35,
           skills: ["javascript", "typescript", "html/css", "mongoDB"],
           identity: "0123987654",
           birth: new Date("10-20-2010"),
           address: {
               province: "XXX",
               city: "XXX"
           }
       }
   ]

   // 1) Make mongodb client
   const mongodb = new MongoClient(DB.url)

   // 2) Connection
   await mongodb.connect()
   console.log(`[INFO][mongodb.connect()]: success`);

   // 3) Setup database
   const db = mongodb.db(DB.name)
   const userCollection = db.collection("user")

   // 4) Add data
   await userCollection.insertMany(jsonData)

   // 5) Delete Data
   await userCollection.deleteMany({skills: ["javascript", "typescript", "html/css", "mongoDB"]})
}

export async function selfInsertOne(){
    // 0) declare data
    const jsonData = {
        firstName: "amir",
        lastName: "john",
        sex: "male",
        age: 25,
        skills: ["javascript", "typescript", "html/css", "mongoDB"],
        identity: "1234567890",
        birth: new Date("01-21-2001"),
        address: {
            province: "Berlin",
            city: "Paris"
        }
    }

    // 1) Make mongodb client
    const mongodb = new MongoClient(DB.url)

    // 2) connection
    await mongodb.connect()
    console.log(`[INFO][mongodb.connect()]: success`);
    // 3) setup database
    const db = mongodb.db(DB.name)
    const userCollection = db.collection("user")

    // 4) Add data
    await userCollection.insertOne(jsonData)

    // 5) Count data
    await userCollection.countDocuments({}).then(console.log)
}

export async function selfFindOneAndDelete(){
    // 0) declare data
    const jsonData = {
        firstName: "amir",
        lastName: "john",
        sex: "male",
        age: 25,
        skills: ["javascript", "typescript", "html/css", "mongoDB"],
        identity: "1234567890",
        birth: new Date("01-21-2001"),
        address: {
            province: "Berlin",
            city: "Paris"
        }
    }

    // 1) Make mongodb client
    const mongodb = new MongoClient(DB.url)

    // 2) connection
    await mongodb.connect()
    console.log(`[INFO][mongodb.connect()]: success`);
    // 3) setup database
    const db = mongodb.db(DB.name)
    const userCollection = db.collection("user")

    // 4) Add data
    await userCollection.insertOne(jsonData)

    // 5) Method
    console.log(
        await userCollection.findOneAndDelete({firstName: 'amir'})
    )
}

export async function selfUpdateMany(query){
    // 1) Make mongodb client
    const mongodb = new MongoClient(DB.url)

    // 2) connection
    await mongodb.connect()
    console.log(`[INFO][mongodb.connect()]: success`);

    // 3) setup database
    const db = mongodb.db(DB.name)
    const userCollection = db.collection("user")

    // 4) Get data from database
    await userCollection.updateMany(query)
}

export async function selfUpdateOne(query){
    // 1) Make mongodb client
    const mongodb = new MongoClient(DB.url)

    // 2) connection
    await mongodb.connect()
    console.log(`[INFO][mongodb.connect()]: success`);

    // 3) setup database
    const db = mongodb.db(DB.name)
    const userCollection = db.collection("user")

    // 4) Get data from database
    await userCollection.updateMany(query)
}