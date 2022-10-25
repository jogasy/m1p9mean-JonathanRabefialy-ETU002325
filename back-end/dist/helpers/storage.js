"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
class Storage {
    constructor() {
        console.log("storage");
    }
    diskStorage() {
        return multer_1.default.diskStorage({
            destination: (req, file, cb) => {
                cb(null, "./images");
            },
            filename: (req, file, cb) => {
                const fileName = file.originalname;
                console.log("filename", fileName);
                cb(null, fileName);
            }
        });
    }
}
const storageClass = new Storage();
const storage = (0, multer_1.default)({ storage: storageClass.diskStorage(), fileFilter: (req, file, cb) => {
        const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
        allowedMimeTypes.includes(file.mimetype) ? cb(null, true) : cb(null, false);
    } }).single('images');
exports.default = storage;
