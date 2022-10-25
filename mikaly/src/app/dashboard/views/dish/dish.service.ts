import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dish } from './types/dish';

@Injectable()
export class DishService {
  data: Dish[] = [
    {
      id: "0",
      img: "../../assets/placeholder.jpg",
      imgPath: "",
      ingredients: "tomate, viande , fromage",
      name: 'Jambon',
      price: 54,
      status: 1
    },
    {
      id: "1",
      img: "../../assets/placeholder.jpg",
      imgPath: "",
      ingredients: "tomate, viande , fromage",
      name: 'Jambon',
      price: 54,
      status: 1
    },
    {
      id: "2",
      img: "../../assets/placeholder.jpg",
      imgPath: "",
      ingredients: "tomate, viande , fromage",
      name: 'Jambon',
      price: 54,
      status: 0
    },
    {
      id: "3",
      img: "../../assets/placeholder.jpg",
      imgPath: "",
      ingredients: "tomate, viande , fromage",
      name: 'Jambon',
      price: 54,
      status: 1
    }
  ]
  constructor() { }

  getData(): Observable<Dish[]> {
    return of(this.data);
  }
}
