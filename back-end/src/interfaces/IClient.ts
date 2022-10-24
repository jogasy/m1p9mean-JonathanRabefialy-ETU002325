import { Document } from 'mongoose';

export default interface IClient extends Document {
    firstName : string;
    lastName : string;
    adress : string;
    tel : string;
}