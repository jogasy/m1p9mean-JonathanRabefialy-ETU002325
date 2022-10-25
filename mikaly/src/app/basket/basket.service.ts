import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { OrdersState } from 'src/store/order/orders.state';
import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Dish } from './types/dish';
import { Orders } from 'src/store/order/orders.actions';
import { Order } from './types/order';

@Injectable()
export class BasketService {
  @Select(OrdersState.basket) basket$! : Observable<Dish[]>;
  @Select(OrdersState.totalPrice) totalPrice$! : Observable<number>;

  readonly api = environment.api;
  constructor(private store: Store, private http: HttpClient) { }

  saveOrder(order: Order): Observable<any> {
    const sendOrder = {
      name: order.name,
      phoneNumber: order.phoneNumber,
      address: order.address,
      hour: order.hour,
      note: order.note,
      status: "0",
      total: order.total,
      basket: order.basket
    }
    return this.http.post(this.api + '/order', sendOrder);
  }

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

  resetBasket(): void {
    this.store.dispatch(new Orders.ResetOrder());
  }
}
