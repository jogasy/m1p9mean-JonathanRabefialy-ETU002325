import { Dish } from "./dish";

export interface Order {
  name: string;
  phoneNumber: string;
  address: string;
  hour: number;
  note: string;
  status: number;
  basket: Dish[];
}
