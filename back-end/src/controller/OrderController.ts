import order from "../model/Order";
import { Request, Response } from "express";

class OrderController {
    public async getAllOrders(req: Request, res: Response) {
        let orders = await order.find();
        res.status(200).json(
            {
                ListOrders : orders,
                len : orders.length
            }
        );  
    }

    public async insertOrder(req: Request, res: Response) {
        let body = req.body;
        let orders = await order.create(body);
        res.status(200).json(
            {
                insertClient : orders
            }
        );  
    }
}

let orderController = new OrderController();
export default orderController;