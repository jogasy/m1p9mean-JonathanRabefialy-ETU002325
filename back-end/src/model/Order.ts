import mongoose, { Schema } from "mongoose";
import { IDish } from "../interfaces/Idish";
import { IOrder } from "../interfaces/Iorder";

const OrderSchema: Schema = new Schema (
    {
        name: { type: String , required: true },
        phoneNumber: { type: String , required: true },
        address: { type: String , required: true },
        hour: { type: Number , required: true },
        note: { type: String , required: true },
        status: { type: Number , required: true },
        dish: { type: [], required: true}
    },
    {
        timestamps : true
    }
);

export default mongoose.model<IOrder>('order', OrderSchema);