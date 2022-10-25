import { OrdersState } from 'src/store/order/orders.state';
import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { map, Observable, of } from 'rxjs';
import { Orders } from './../../store/order/orders.actions';
import { Dish } from './types/dish';

@Injectable()
export class HomeService {
  @Select(OrdersState.shoppingCount) shoppingCount$!: Observable<number>;

  data: Dish[] = [
    {
      _id: "0",
      img: "../../assets/placeholder.jpg",
      imgPath: "",
      ingredients: "tomate, viande , fromage",
      name: 'Jambon',
      price: 54,
      status: 1
    },
    {
      _id: "1",
      img: "../../assets/placeholder.jpg",
      imgPath: "",
      ingredients: "tomate, viande , fromage",
      name: 'Jambon',
      price: 54,
      status: 1
    },
    {
      _id: "2",
      img: "../../assets/placeholder.jpg",
      imgPath: "",
      ingredients: "tomate, viande , fromage",
      name: 'Jambon',
      price: 54,
      status: 0
    },
    {
      _id: "3",
      img: "../../assets/placeholder.jpg",
      imgPath: "",
      ingredients: "tomate, viande , fromage",
      name: 'Jambon',
      price: 54,
      status: 1
    }
  ]

  constructor(private store: Store) { }

  getDishInBasket(id: string): Observable<Dish | undefined> {
    return this.store.select(OrdersState.getDish)
              .pipe(
                map(filterFn => filterFn(id))
              );
  }

  getData(): Observable<Dish[]> {
    return of(this.data)
        .pipe(
          map(x => x.filter(x => x.status === 1))
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
