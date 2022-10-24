"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
class Storage {
    constructor() { }
    diskStorage() {
        return multer_1.default.diskStorage({
            destination: (req, file, cb) => {
                cb(null, "images");
            },
            filename: (req, file, cb) => {
                const mimeType = file.mimetype.split('/');
                const fileType = mimeType[1];
                const fileName = file.originalname + '.' + fileType;
                cb(null, fileName);
            }
        });
    }
    fileFilter() {
        return (req, file, cb) => {
            const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
            allowedMimeTypes.includes(file.mimeType) ? cb(null, true) : cb(null, false);
        };
    }
}
const storageClass = new Storage();
const storage = (0, multer_1.default)({ storage: storageClass.diskStorage(), fileFilter: storageClass.fileFilter() }).single('image');
exports.default = storage;
