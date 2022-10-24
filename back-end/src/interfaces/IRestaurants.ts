import { Document } from 'mongoose';

export default interface IRestaurants extends Document {
    nomRestaurant : string;
    adress : string;
}