import { Injectable } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';
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
  constructor() { }

  getData(): Observable<Dish[]> {
    return of(this.data)
        .pipe(
          map(x => x.filter(x => x.status === 1))
        );
  }
}
