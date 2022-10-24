"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PlatController_1 = __importDefault(require("../controller/PlatController"));
const storage_1 = __importDefault(require("../helpers/storage"));
class PlatRoute {
    constructor() {
        this.routes = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.routes.get('/', PlatController_1.default.getAllPlat);
        this.routes.post('/', storage_1.default, PlatController_1.default.insertPlat);
    }
}
let platRoute = new PlatRoute();
exports.default = platRoute.routes;
