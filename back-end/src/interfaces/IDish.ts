import { Document } from 'mongoose';

export interface IDish extends Document {
  img: string;
  name: string;
  ingredients: string;
  price: number;
  status: number;
  qty?: number;
}
