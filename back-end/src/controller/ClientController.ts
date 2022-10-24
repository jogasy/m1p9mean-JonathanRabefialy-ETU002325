import { Request, Response } from "express";
import client from "../model/Client";

class ClientController {
    public async getAllClient(req: Request, res: Response) {
        let clients = await client.find();
        res.status(200).json(
            {
                ListClients : clients,
                len : clients.length
            }
        );  
    }

    public async insertClient(req: Request, res: Response) {
        let body = req.body;
        let clients = await client.create(body);
        res.status(200).json(
            {
                insertClient : clients
            }
        );  
    }
}

let clientController = new ClientController();
export default clientController;