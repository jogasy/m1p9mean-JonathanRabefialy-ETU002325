import mongoose, { Schema } from "mongoose";
import IUser from "../interfaces/IUser";

const USerSchema: Schema = new Schema (
    {
        name: { type: String , required: true },
        password: { type: String , required: true },
        role: { type: String , required: true },
    },
    {
        timestamps : true
    }
);

export default mongoose.model<IUser>('user', USerSchema);