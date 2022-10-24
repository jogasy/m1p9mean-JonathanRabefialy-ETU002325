import { Router } from "express";
import platController from "../controller/PlatController";
import storage from "../helpers/storage";


class PlatRoute {
    public routes: Router = Router();

    constructor() {
        this.config();
    }

    public config():void {
        this.routes.get('/', platController.getAllPlat);
        this.routes.post('/', storage, platController.insertPlat);
    }
}

let platRoute = new PlatRoute();
export default platRoute.routes;