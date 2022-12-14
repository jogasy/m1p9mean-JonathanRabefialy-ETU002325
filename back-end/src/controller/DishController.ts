import { Request, Response } from "express";
import dish from "../model/Dish";
import dotenv from 'dotenv';

class DishController {
    constructor(){
        dotenv.config();
    }
    
    public async getAllDish(req: Request, res: Response) {
        let dishes = await dish.find();
        res.status(200).json(
            {
                dishes : dishes,
                len : dishes.length
            }
        );  
    }

    public async putDish(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const body = req.body;
            let upd = await dish.updateOne({ _id: id}, body);
            res.status(200).json(
                {
                    dish : upd
                }
            );  
        } catch (error) {
            console.log("error");
        }
    }

    public async putImgDish(req: Request, res: Response) {
        try {
            let body = JSON.parse(req.body.dish);
            let imgPath = `${process.env.pathImg}${req.file?.filename}`;
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
            let plats = await dish.updateOne({ _id: body._id}, dishes);  
            res.status(200).json(
                {
                "dish": plats
                }
            );
        } catch (error) {
            console.log("error", error);
        } 
    }

    public async insertDish(req: Request, res: Response) {
        try {
            let body = JSON.parse(req.body.dish);
            let imgPath = `${process.env.pathImg}${req.file?.filename}`;
            let dishes = {
                "imgPath": imgPath,
                "img": body.img,
                "name": body.name,
                "ingredients": body.ingredients,
                "price": body.price,
                "status": body.status,
                "qty": body.qty
            };
            let plats = await dish.create(dishes);  
            res.status(200).json(
                {
                "dish": plats
                }
            );
        } catch (error) {
            console.log("error", error);
        }
    }
}

let dishController = new DishController();
export default dishController;