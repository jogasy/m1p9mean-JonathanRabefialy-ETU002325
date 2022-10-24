import mongoose, { Schema } from "mongoose";
import { IDish } from "../interfaces/Idish";

const OrderSchema: Schema = new Schema (
    {
        name: { type: String , required: true },
        phoneNumber: { type: String , required: true },
        address: { type: String , required: true },
        hour: { type: Number , required: true },
        note: { type: String , required: true },
        status: { type: Number , required: true },
    },
    {
        timestamps : true
    }
);

export default mongoose.model<IDish>('dish', OrderSchema);