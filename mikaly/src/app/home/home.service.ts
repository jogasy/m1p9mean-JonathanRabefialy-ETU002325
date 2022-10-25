import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { OrdersState } from 'src/store/order/orders.state';
import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { map, Observable, tap } from 'rxjs';
import { Orders } from './../../store/order/orders.actions';
import { Dish } from './types/dish';

@Injectable()
export class HomeService {
  readonly api = environment.api;
  @Select(OrdersState.shoppingCount) shoppingCount$!: Observable<number>;

  constructor(private store: Store, private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.api + '/dish').pipe(
      map(x => x.dishes.filter( (x: any) => x.status === '0'))
    );;
  }

  getDishInBasket(id: string): Observable<Dish | undefined> {
    return this.store.select(OrdersState.getDish)
              .pipe(
                map(filterFn => filterFn(id))
              );
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
}
