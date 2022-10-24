import { Document } from 'mongoose';
import { IDish } from './Idish';

export interface IOrder extends Document {
  name: string;
  phoneNumber: string;
  address: string;
  hour: number;
  note: string;
  status: number;
  basket: IDish[];
}
