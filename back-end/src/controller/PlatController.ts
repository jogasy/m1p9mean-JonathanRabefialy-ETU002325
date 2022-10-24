import { Request, Response } from "express";
import plat from "../model/Plat";
import dotenv from 'dotenv';
import IPlats from "../interfaces/IPlats";
import { json } from "body-parser";

class PlatController {
    constructor(){
        dotenv.config();
    }
    public async getAllPlat(req: Request, res: Response) {
        let plats = await plat.find();
        res.status(200).json(
            {
                ListPlats : plats,
                len : plats.length
            }
        );  
    }

    public async insertPlat(req: Request, res: Response) {
        try {
            console.log("body ", JSON.parse(req.body.dish) );
            console.log("file", req.file?.filename);
            let body = JSON.parse(req.body.dish);
            let imgPath = `${process.env.pathImg}${req.file?.filename}`;
            let dish = {
                "nameDish" : body.nameDish,
                "ingredients" :  body.ingredients,
                "img" : body.img,
                "restaurant" : {
                    "nomRestaurant" : body.restaurant.nomRestaurant, 
                    "adress" : body.restaurant.adress 
                },
                "price" : body.price,
                "imgPath" : imgPath
            };
            let plats = await plat.create(dish);  
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

let platController = new PlatController();
export default platController;