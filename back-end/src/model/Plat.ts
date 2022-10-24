import mongoose, { Schema } from "mongoose";
import IPlats from "../interfaces/IPlats";

const PlatSchema: Schema = new Schema (
    {
        nameDish : { type: String, required: true },
        ingredients: { type: String, required: true},
        img : { type: String, required: true},
        price: { type: Number, required: true},
        restaurant: { type: {
            nomRestaurant: String,
            adress: String
        } , required: true},
        imgPath: { type: String, required: true}
    },
    {
        timestamps : true
    }
);

export default mongoose.model<IPlats>('plat', PlatSchema);