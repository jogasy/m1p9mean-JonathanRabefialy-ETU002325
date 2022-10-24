import mongoose, { Schema } from "mongoose";
import IClient from "../interfaces/IClient";

const ClientSchema: Schema = new Schema (
    {
        firstName : { type: String , required: true },
        lastName : { type: String , required: true },
        adress : { type: String , required: true },
        tel : { type: String , required: true }
    },
    {
        timestamps : true
    }
);

export default mongoose.model<IClient>('client', ClientSchema);

