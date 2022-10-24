import { Router } from "express";
import orderController from "../controller/OrderController";

class OrderRoute {
    public routes: Router = Router();
    constructor() {
        this.config();
    }

    public config(): void {
        this.routes.get('/', orderController.getAllOrders);
        this.routes.post('/', orderController.insertOrder);
    }
}

let orderRoute = new OrderRoute();
export default orderRoute.routes;