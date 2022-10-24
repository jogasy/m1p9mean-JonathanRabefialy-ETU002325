import mongoose ,{ Schema } from "mongoose";
import client from "../model/Client";
import plat from "../model/Plat";

const CommandSchema = new Schema(
    {
        client : { type : {
            firstName : String,
            lastName : String,
            adress : String,
            tel : String
        }, required: true},
        plats : { type: [], required: true},
        dateLivraison : Date
    },
    {
        timestamps : true
    }
);

export default mongoose.model("command", CommandSchema);