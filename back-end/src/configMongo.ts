import dotenv from 'dotenv';

class ConfigMongo {
    private MONGO_OPTIONS = {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        socketTimeoutMs: 30000,
        keepAlive: true,
        //poolSize: 50,
        autoIndex: false,
        retryWrites: false
    }

    public mongo = {
        options: {},
        url: ''
    }

    constructor() {
        dotenv.config();
        this.mongo.options = this.MONGO_OPTIONS,
        this.mongo.url = process.env.MONGO_URL!;
    } 

}

let configMongo = new ConfigMongo();
export default configMongo;


