import mongoose, { Schema } from "mongoose";
import { IOrder } from "../interfaces/Iorder";

const OrderSchema: Schema = new Schema (
    {
        name: { type: String , required: true },
        phoneNumber: { type: String , required: true },
        address: { type: String , required: true },
        hour: { type: String , required: true },
        note: { type: String , required: false },
        status: { type: String , required: true },
        total: { type: String , required: true },
        basket: { type: [], required: true}
    },
    {
        timestamps : true
    }
);

export default mongoose.model<IOrder>('order', OrderSchema);