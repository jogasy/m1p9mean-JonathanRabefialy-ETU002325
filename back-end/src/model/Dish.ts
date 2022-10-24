import mongoose, { Schema } from "mongoose";
import { IOrder } from "../interfaces/Iorder";

const DishSchema: Schema = new Schema (
    {
        img: { type: String , required: true },
        name: { type: String , required: true },
        ingredients: { type: String , required: true },
        price: { type: Number , required: true },
        status: { type: String , required: true },
        qty: { type: Number , required: true },
        dish: { type: [], required: true}
    },
    {
        timestamps : true
    }
);

export default mongoose.model<IOrder>('order', DishSchema);