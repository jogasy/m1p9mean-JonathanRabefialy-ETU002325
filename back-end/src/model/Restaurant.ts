import mongoose, { Schema } from "mongoose";
import IRestaurants from "../interfaces/IRestaurants";

const RestaurantSchema: Schema = new Schema (
    {
        nomRestaurants : { type : String, required: true },
        adress : { type : String, required: true }
    },
    {
        timestamps : true
    }
);

export default mongoose.model<IRestaurants>('restaurant', RestaurantSchema);