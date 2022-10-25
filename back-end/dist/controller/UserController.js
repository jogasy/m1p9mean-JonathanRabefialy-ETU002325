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
const User_1 = __importDefault(require("../model/User"));
class UserController {
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let users = yield User_1.default.find();
            res.status(200).json({
                ListUsers: users,
                len: users.length
            });
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield User_1.default.deleteOne({ _id: req.params.id });
            res.status(200).json({
                message: "delete done"
            });
        });
    }
    insertUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let body = req.body;
            let users = yield User_1.default.create(body);
            res.status(200).json({
                insertClient: users
            });
        });
    }
}
let userController = new UserController();
exports.default = userController;
