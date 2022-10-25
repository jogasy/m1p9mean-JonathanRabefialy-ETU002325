"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controller/UserController"));
class UserRoute {
    constructor() {
        this.routes = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.routes.get('/', UserController_1.default.getUsers);
        this.routes.post('/', UserController_1.default.insertUser);
        this.routes.delete('/:id', UserController_1.default.deleteUser);
    }
}
let userRoute = new UserRoute();
exports.default = userRoute.routes;
