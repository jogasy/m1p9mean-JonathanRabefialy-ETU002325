import { Request, Response } from "express";
import client from "../model/Client";
import restaurant from "../model/Restaurant";

class RestaurantController {
    public async getAllRestaurants(req: Request, res: Response) {
        let restaurants = await restaurant.find();
        res.status(200).json(
            {
                ListClients : restaurants,
                len : restaurants.length
            }
        );  
    }

    public async insertRestaurant(req: Request, res: Response) {
        let body = req.body;
        let restaurants = await restaurant.create(body);
        res.status(200).json(
            {
                insertClient : restaurants
            }
        );  
    }
}

let restaurantController = new RestaurantController();
export default restaurantController;