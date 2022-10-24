"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = __importDefault(require("../model/Client"));
class ClientController {
    getAllClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let clients = yield Client_1.default.find();
            res.status(200).json({
                ListClients: clients,
                len: clients.length
            });
        });
    }
    insertClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let body = req.body;
            let clients = yield Client_1.default.create(body);
            res.status(200).json({
                insertClient: clients
            });
        });
    }
}
let clientController = new ClientController();
exports.default = clientController;
