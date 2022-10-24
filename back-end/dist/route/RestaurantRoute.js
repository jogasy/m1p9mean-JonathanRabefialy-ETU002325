"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RestaurantController_1 = __importDefault(require("../controller/RestaurantController"));
class PlatRoute {
    constructor() {
        this.routes = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.routes.get('/', RestaurantController_1.default.getAllRestaurants);
        this.routes.post('/', RestaurantController_1.default.insertRestaurant);
    }
}
let restaurantRoute = new PlatRoute();
exports.default = restaurantRoute.routes;
