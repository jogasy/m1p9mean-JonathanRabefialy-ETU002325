import { Router } from "express";
import clientController from "../controller/ClientController";
class ClientRoute {
    public routes: Router = Router();

    constructor(){
        this.config();
    }

    public config():void {
        this.routes.get('/', clientController.getAllClient);
        this.routes.post('/', clientController.insertClient);
    }
}

let clientRoute = new ClientRoute().routes;
export default clientRoute;

