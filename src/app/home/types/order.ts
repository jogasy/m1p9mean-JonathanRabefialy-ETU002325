import { Dish } from "./dish";

export interface Order {
  name: string;
  tel: number;
  address: string;
  hour: number;
  note: string;
  basket: Dish[];
}
