import { Dish } from "src/app/home/types/dish";
import { Order } from "src/app/home/types/order";

export interface OrdersStateModel {
  basket?: Dish[];
  order?: Order;
}
