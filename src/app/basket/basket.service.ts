import { Observable } from 'rxjs';
import { OrdersState } from 'src/store/order/orders.state';
import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import { Dish } from './types/dish';

@Injectable()
export class BasketService {
  @Select(OrdersState.basket) basket$! : Observable<Dish[]>;
  @Select(OrdersState.totalPrice) totalPrice$! : Observable<number>;

  constructor() { }
}
