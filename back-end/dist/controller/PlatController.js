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
const Plat_1 = __importDefault(require("../model/Plat"));
const dotenv_1 = __importDefault(require("dotenv"));
class PlatController {
    constructor() {
        dotenv_1.default.config();
    }
    getAllPlat(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let plats = yield Plat_1.default.find();
            res.status(200).json({
                ListPlats: plats,
                len: plats.length
            });
        });
    }
    insertPlat(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("body ", JSON.parse(req.body.dish));
                console.log("file", (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename);
                let body = JSON.parse(req.body.dish);
                let imgPath = `${process.env.pathImg}${(_b = req.file) === null || _b === void 0 ? void 0 : _b.filename}`;
                let dish = {
                    "nameDish": body.nameDish,
                    "ingredients": body.ingredients,
                    "img": body.img,
                    "restaurant": {
                        "nomRestaurant": body.restaurant.nomRestaurant,
                        "adress": body.restaurant.adress
                    },
                    "price": body.price,
                    "imgPath": imgPath
                };
                let plats = yield Plat_1.default.create(dish);
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
let platController = new PlatController();
exports.default = platController;
