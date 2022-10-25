import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Order } from './types/order';

@Injectable()
export class OrdersService {
  readonly api = environment.api;
  constructor(private http: HttpClient) { }

  getOrders(): Observable<any> {
    return this.http.get<any>(this.api + '/order');
  }

  putOrder(id: string, order: Order) {
    return this.http.put(this.api + '/order/'+id , order);
  }
}
