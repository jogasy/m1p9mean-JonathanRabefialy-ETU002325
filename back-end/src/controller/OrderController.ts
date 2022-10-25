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

    public async putOrder(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const body = req.body;
            let upd = await order.updateOne({ _id: id}, body);
            res.status(200).json(
                {
                    order : upd
                }
            );  
        } catch (error) {
            console.log("error");
        }
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