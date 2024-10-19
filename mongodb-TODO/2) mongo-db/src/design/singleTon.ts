import { Db, MongoClient } from "mongodb"

export class ConnectToMongoDB /* SingleTon DesignPattern */ {
    private DB_URL = 'mongodb://localhost:27017/mongodb-tutorials'
    private db: Db | undefined

    private async connect(): Promise<Db | undefined>{
        try {
            // 1) make new connection
            // 2) connect to db name
            return new MongoClient(this.DB_URL).db()

        } catch (error) {
            console.log('[ERROR][new MongoClient(this.DB_URL).db()]: ' + error)
            return undefined

        }
    }

    public async Get(): Promise<Db | undefined>{
        try {
            if(this.db){
                console.log(`[INFO][DB connection]: already alive`);
                return this.db

            } else {
                this.db = await this.connect()
                return this.db

            }
        } catch (error) {
            console.log('[ERROR][await this.connect()]: ' + error)
            return undefined

        }
    }
}


