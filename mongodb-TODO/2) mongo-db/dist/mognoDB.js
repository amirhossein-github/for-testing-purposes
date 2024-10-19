"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const singleTon_1 = require("./design/singleTon");
const jsonData = {
    firstName: "amir",
    lastName: "john",
    age: 25,
};
console.log(`[INFO][node mongoDB.js]: start`);
function mainClass() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield new singleTon_1.ConnectToMongoDB().Get().then();
        console.log(`[INFO][mongodb.connect()]: success`);
        const userCollection = db.collection("user");
        userCollection.insertOne(jsonData);
        yield userCollection.find({}).toArray().then(console.log);
    });
}
;
mainClass();
