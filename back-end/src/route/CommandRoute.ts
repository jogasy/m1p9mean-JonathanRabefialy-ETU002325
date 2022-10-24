import { Router } from "express";
import commandController from "../controller/CommandController";

class CommandRoute {
    public routes: Router = Router();
    constructor() {
        this.config();
    }

    public config(): void {
        this.routes.get('/', commandController.getAllCommands);
        this.routes.post('/', commandController.insertCommand);
    }
}

let commandRoute = new CommandRoute();
export default commandRoute.routes;