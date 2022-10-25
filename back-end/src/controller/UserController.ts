import user from "../model/User";
import { Request, Response } from "express";

class UserController {
    public async getUsers(req: Request, res: Response) {
        let users = await user.find();
        res.status(200).json(
            {
                ListUsers : users,
                len : users.length
            }
        );  
    }

    public async insertUser(req: Request, res: Response) {
        let body = req.body;
        let users = await user.create(body);
        res.status(200).json(
            {
                insertClient : users
            }
        );  
    }
}

let userController = new UserController();
export default userController;