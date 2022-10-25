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
const Order_1 = __importDefault(require("../model/Order"));
class OrderController {
    getAllOrders(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let orders = yield Order_1.default.find();
            res.status(200).json({
                ListOrders: orders,
                len: orders.length
            });
        });
    }
    putOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const body = req.body;
                let upd = yield Order_1.default.updateOne({ _id: id }, body);
                res.status(200).json({
                    order: upd
                });
            }
            catch (error) {
                console.log("error");
            }
        });
    }
    insertOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let body = req.body;
            let orders = yield Order_1.default.create(body);
            res.status(200).json({
                insertClient: orders
            });
        });
    }
}
let orderController = new OrderController();
exports.default = orderController;
