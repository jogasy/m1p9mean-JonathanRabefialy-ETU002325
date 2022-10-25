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
const Dish_1 = __importDefault(require("../model/Dish"));
const dotenv_1 = __importDefault(require("dotenv"));
class DishController {
    constructor() {
        dotenv_1.default.config();
    }
    getAllDish(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let dishes = yield Dish_1.default.find();
            res.status(200).json({
                dishes: dishes,
                len: dishes.length
            });
        });
    }
    putDish(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const body = req.body;
                let upd = yield Dish_1.default.updateOne({ _id: id }, body);
                res.status(200).json({
                    dish: upd
                });
            }
            catch (error) {
                console.log("error");
            }
        });
    }
    putImgDish(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let body = JSON.parse(req.body.dish);
                let imgPath = `${process.env.pathImg}${(_a = req.file) === null || _a === void 0 ? void 0 : _a.filename}`;
                let dishes = {
                    "_id": body._id,
                    "imgPath": imgPath,
                    "img": body.img,
                    "name": body.name,
                    "ingredients": body.ingredients,
                    "price": body.price,
                    "status": body.status,
                    "qty": body.qty
                };
                let plats = yield Dish_1.default.updateOne({ _id: body._id }, dishes);
                res.status(200).json({
                    "dish": plats
                });
            }
            catch (error) {
                console.log("error", error);
            }
        });
    }
    insertDish(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let body = JSON.parse(req.body.dish);
                let imgPath = `${process.env.pathImg}${(_a = req.file) === null || _a === void 0 ? void 0 : _a.filename}`;
                let dishes = {
                    "imgPath": imgPath,
                    "img": body.img,
                    "name": body.name,
                    "ingredients": body.ingredients,
                    "price": body.price,
                    "status": body.status,
                    "qty": body.qty
                };
                let plats = yield Dish_1.default.create(dishes);
                res.status(200).json({
                    "dish": plats
                });
            }
            catch (error) {
                console.log("error", error);
            }
        });
    }
}
let dishController = new DishController();
exports.default = dishController;
