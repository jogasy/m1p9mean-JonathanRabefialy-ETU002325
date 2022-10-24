import { Router } from "express";
import restaurantController from "../controller/RestaurantController";


class PlatRoute {
    public routes: Router = Router();

    constructor() {
        this.config();
    }

    public config():void {
        this.routes.get('/', restaurantController.getAllRestaurants);
        this.routes.post('/', restaurantController.insertRestaurant);
    }
}

let restaurantRoute = new PlatRoute();
export default restaurantRoute.routes;