import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { map, Observable, of } from 'rxjs';
import { Orders } from './../../store/order/orders.actions';
import { Dish } from './types/dish';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  data: Dish[] = [
    {
      id: "0",
      img: "../../assets/placeholder.jpg",
      ingredients: "tomate, viande , fromage",
      name: 'Jambon',
      price: 54,
      status: 1
    },
    {
      id: "1",
      img: "../../assets/placeholder.jpg",
      ingredients: "tomate, viande , fromage",
      name: 'Jambon',
      price: 54,
      status: 1
    },
    {
      id: "2",
      img: "../../assets/placeholder.jpg",
      ingredients: "tomate, viande , fromage",
      name: 'Jambon',
      price: 54,
      status: 0
    },
    {
      id: "3",
      img: "../../assets/placeholder.jpg",
      ingredients: "tomate, viande , fromage",
      name: 'Jambon',
      price: 54,
      status: 1
    }
  ]

  constructor(private store: Store) { }

  getData(): Observable<Dish[]> {
    return of(this.data)
        .pipe(
          map(x => x.filter(x => x.status === 1))
        );
  }

  createBasket(val: Dish) {
    const dish = { ...val , qty: 1};
    return this.store.dispatch(new Orders.CreateBasket(dish));
  }
}
