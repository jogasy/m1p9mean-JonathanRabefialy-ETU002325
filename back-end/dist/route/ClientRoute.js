"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClientController_1 = __importDefault(require("../controller/ClientController"));
class ClientRoute {
    constructor() {
        this.routes = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.routes.get('/', ClientController_1.default.getAllClient);
        this.routes.post('/', ClientController_1.default.insertClient);
    }
}
let clientRoute = new ClientRoute().routes;
exports.default = clientRoute;
