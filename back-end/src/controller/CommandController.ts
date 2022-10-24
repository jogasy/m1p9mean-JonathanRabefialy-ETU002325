import command from "../model/Command";
import { Request, Response } from "express";

class CommandController {
    public async getAllCommands(req: Request, res: Response) {
        let commands = await command.find();
        res.status(200).json(
            {
                ListCommands : commands,
                len : commands.length
            }
        );  
    }

    public async insertCommand(req: Request, res: Response) {
        let body = req.body;
        let commands = await command.create(body);
        res.status(200).json(
            {
                insertClient : commands
            }
        );  
    }
}

let commandController = new CommandController();
export default commandController;