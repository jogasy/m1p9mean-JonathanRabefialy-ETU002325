"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DishController_1 = __importDefault(require("../controller/DishController"));
const storage_1 = __importDefault(require("../helpers/storage"));
class DishRoute {
    constructor() {
        this.routes = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.routes.get('/', DishController_1.default.getAllDish);
        this.routes.post('/', storage_1.default, DishController_1.default.insertDish);
        this.routes.put('/:id', DishController_1.default.putDish);
    }
}
let dishRoute = new DishRoute();
exports.default = dishRoute.routes;
