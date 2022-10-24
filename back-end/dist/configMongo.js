"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
class ConfigMongo {
    constructor() {
        this.MONGO_OPTIONS = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            socketTimeoutMs: 30000,
            keepAlive: true,
            //poolSize: 50,
            autoIndex: false,
            retryWrites: false
        };
        this.mongo = {
            options: {},
            url: ''
        };
        dotenv_1.default.config();
        this.mongo.options = this.MONGO_OPTIONS,
            this.mongo.url = process.env.MONGO_URL;
    }
}
let configMongo = new ConfigMongo();
exports.default = configMongo;
