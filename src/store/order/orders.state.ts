import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { append, patch , removeItem, updateItem } from "@ngxs/store/operators";
import { Dish } from 'src/app/home/types/dish';
import { Orders } from './orders.actions';
import { OrdersStateModel } from "./orders.model";

const defaultValue: OrdersStateModel = {
  basket: undefined,
  order: undefined
};

@State<OrdersStateModel>({
  name: 'orders',
  defaults: defaultValue
})

@Injectable()
export class OrdersState {

  @Selector()
  static basket(state: OrdersStateModel): Dish[] {
      return state.basket ?? [];
  }

  @Selector()
  static getDish(state: OrdersStateModel): (id: string) => Dish | undefined {
      return (id: string): Dish | undefined => {
          return state.basket?.find(x => x.id === id);
      };
  }

  @Selector()
  static shoppingCount(state: OrdersStateModel): number {
      return state.basket?.length ?? 0;
  }

  @Selector()
  static totalPrice(state: OrdersStateModel) {
    let total = 0;
      state.basket?.map((x) => {
        total += x.price * x.qty!;
      })
    return total;
  }

  @Action(Orders.UpdateBasket)
  updateOrderItem(ctx: StateContext<OrdersStateModel>, payload: Orders.UpdateBasket): void {
        ctx.setState(
            patch({
              basket: updateItem<Dish>((dish => dish?.id === payload.id), patch(payload.patchData))
            })
        );
  }

  @Action(Orders.CreateBasket)
  createOrderItem(ctx: StateContext<OrdersStateModel>, payload: Orders.CreateBasket): void {
      ctx.setState(
          patch({
              basket: append([payload.dish])
          })
      );
  }

  @Action(Orders.RemoveBasket)
  removeOrderItem(ctx: StateContext<OrdersStateModel>, payload: Orders.RemoveBasket): void {
      ctx.setState(
          patch({
              basket: removeItem<Dish>(dish => dish?.id === payload.id)
          })
      );
  }

}
