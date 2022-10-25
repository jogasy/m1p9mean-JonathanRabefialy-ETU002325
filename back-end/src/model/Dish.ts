import mongoose, { Schema } from "mongoose";
import { IDish } from "../interfaces/Idish";

const DishSchema: Schema = new Schema (
    {
        img: { type: String , required: true },
        name: { type: String , required: true },
        ingredients: { type: String , required: true },
        price: { type: Number , required: true },
        status: { type: String , required: true },
        qty: { type: Number , required: false },
        imgPath: { type: String , required: true },
    },
    {
        timestamps : true
    }
);

export default mongoose.model<IDish>('dish', DishSchema);