import { Router } from "express";
import dishController from "../controller/DishController";
import storage from "../helpers/storage";


class DishRoute {
    public routes: Router = Router();

    constructor() {
        this.config();
    }

    public config():void {
        this.routes.get('/', dishController.getAllDish);
        this.routes.post('/', storage, dishController.insertDish);
        this.routes.put('/:id', dishController.putDish);
        this.routes.put('/img/:id', storage, dishController.putImgDish);
    }
}

let dishRoute = new DishRoute();
export default dishRoute.routes;