import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dish } from './types/dish';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DishService {
  readonly api = environment.api;
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

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.api + '/dish');
  }

  public postDish(dish: Dish, img: File): Observable<Object> {
    const formData = new FormData();
    const dishToStringify= JSON.stringify(dish);
    formData.append('dish', dishToStringify),
    formData.append('images', img);
    console.log("formData", formData);
    return this.http.post(this.api + '/dish', formData);
  }
}
