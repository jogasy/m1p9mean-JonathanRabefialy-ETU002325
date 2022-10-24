import { Router } from "express";
import userController from "../controller/UserController";

class UserRoute {
    public routes: Router = Router();
    constructor() {
        this.config();
    }

    public config(): void {
        this.routes.get('/', userController.getUsers);
        this.routes.post('/', userController.insertUser);
    }
}

let userRoute = new UserRoute();
export default userRoute.routes;