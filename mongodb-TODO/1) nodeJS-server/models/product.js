const fs = require("fs");
const methods = require("./../temp/methods.js")
const databasePath = './database/products.json'

async function get(){
    return new Promise((resolve, reject) => { // Connect to the real database
        const data = methods.readJsonFile(databasePath)
        data ? resolve(data) : reject(data)
    })
}

const ProductsModel = {
    get,
}

module.exports = ProductsModel