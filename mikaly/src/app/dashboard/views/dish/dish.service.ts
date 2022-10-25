import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dish } from './types/dish';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class DishService {
  readonly api = environment.api;

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.api + '/dish');
  }

  putDish(id: string, dish: Dish): Observable<any> {
    return this.http.put(`${this.api}/dish/${id}`, dish);
  }

  postDish(dish: Dish, img: File): Observable<Object> {
    const formData = new FormData();
    const dishToStringify= JSON.stringify(dish);
    formData.append('dish', dishToStringify),
    formData.append('images', img);
    console.log("formData", formData);
    return this.http.post(this.api + '/dish', formData);
  }
}
