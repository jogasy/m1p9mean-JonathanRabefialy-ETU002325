import { map, Observable } from 'rxjs';
import { OrdersState } from 'src/store/order/orders.state';
import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Dish } from './types/dish';
import { Orders } from 'src/store/order/orders.actions';

@Injectable()
export class BasketService {
  @Select(OrdersState.basket) basket$! : Observable<Dish[]>;
  @Select(OrdersState.totalPrice) totalPrice$! : Observable<number>;

  constructor(private store: Store) { }

  createBasket(val: Dish) {
    const dish = { ...val , qty: 1};
    this.store.dispatch(new Orders.CreateBasket(dish));
  }

  removeDishinBasket(id: string) {
    this.store.dispatch(new Orders.RemoveBasket(id));
  }

  updateBasket(id: string, dish: Partial<Dish>) {
    this.store.dispatch(new Orders.UpdateBasket(id, dish));
  }

  getDishInBasket(id: string): Observable<Dish | undefined> {
    return this.store.select(OrdersState.getDish)
              .pipe(
                map(filterFn => filterFn(id))
              );
  }
}
