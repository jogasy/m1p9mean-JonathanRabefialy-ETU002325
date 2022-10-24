import { Document } from "mongoose";
import IClient from "./IClient";
import IPlats from "./IPlats";

export default interface ICommand extends Document {
    client : IClient;
    plats : IPlats[];
    dateLivraison : Date;
}