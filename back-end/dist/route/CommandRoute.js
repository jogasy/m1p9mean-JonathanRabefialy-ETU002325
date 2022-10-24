"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CommandController_1 = __importDefault(require("../controller/CommandController"));
class CommandRoute {
    constructor() {
        this.routes = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.routes.get('/', CommandController_1.default.getAllCommands);
        this.routes.post('/', CommandController_1.default.insertCommand);
    }
}
let commandRoute = new CommandRoute();
exports.default = commandRoute.routes;
