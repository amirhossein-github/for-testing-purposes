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
exports.ConnectToMongoDB = void 0;
const mongodb_1 = require("mongodb");
class ConnectToMongoDB {
    constructor() {
        this.DB_URL = 'mongodb://localhost:27017/mongodb-tutorials';
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return new mongodb_1.MongoClient(this.DB_URL).db();
            }
            catch (error) {
                console.log('[ERROR][new MongoClient(this.DB_URL).db()]: ' + error);
                return undefined;
            }
        });
    }
    Get() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.db) {
                    console.log(`[INFO][DB connection]: already alive`);
                    return this.db;
                }
                else {
                    this.db = yield this.connect();
                    return this.db;
                }
            }
            catch (error) {
                console.log('[ERROR][await this.connect()]: ' + error);
                return undefined;
            }
        });
    }
}
exports.ConnectToMongoDB = ConnectToMongoDB;
