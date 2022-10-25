"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const configMongo_1 = __importDefault(require("./configMongo"));
const mongoose_1 = __importDefault(require("mongoose"));
const DishRoute_1 = __importDefault(require("./route/DishRoute"));
const OrderRoute_1 = __importDefault(require("./route/OrderRoute"));
const UserRoute_1 = __importDefault(require("./route/UserRoute"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        dotenv_1.default.config();
        this.portNumber = parseInt(process.env.portApplication);
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', this.portNumber);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(body_parser_1.default.json());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use((0, cors_1.default)());
        this.app.use('/images', express_1.default.static(path_1.default.join('images')));
        mongoose_1.default.connect(configMongo_1.default.mongo.url, configMongo_1.default.mongo.options)
            .then(res => {
            console.log("mongodb is connected");
        })
            .catch(err => {
            console.log("mongodb is not connected", err);
        });
    }
    routes() {
        this.app.use('/dish', DishRoute_1.default);
        this.app.use('/order', OrderRoute_1.default);
        this.app.use('/user', UserRoute_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Serveur sur le port ' + this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
