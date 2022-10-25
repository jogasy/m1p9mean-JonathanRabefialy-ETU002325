import { Dish } from "./dish";

export interface Order {
  _id: string;
  name: string;
  phoneNumber: string;
  address: string;
  hour: string;
  note: string;
  status: string;
  total: string;
  basket: Dish[];
}
