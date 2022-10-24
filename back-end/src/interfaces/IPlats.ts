import { Document } from "mongoose";
import IRestaurants from "./IRestaurants";

export default interface IPlats extends Document {
    nameDish : String;
    ingredients: String;
    img : String;
    price : number;
    restaurant: IRestaurants;
    imgPath: String;
}