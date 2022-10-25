"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const OrderController_1 = __importDefault(require("../controller/OrderController"));
class OrderRoute {
    constructor() {
        this.routes = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.routes.get('/', OrderController_1.default.getAllOrders);
        this.routes.post('/', OrderController_1.default.insertOrder);
    }
}
let orderRoute = new OrderRoute();
exports.default = orderRoute.routes;
