import { takeUntil, Subject } from 'rxjs';
import { OrdersService } from './orders.service';
import { Component, OnInit } from '@angular/core';
import { Order } from './types/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  ordersProcessing: Order[]= [];
  ordersReady: Order[]= [];

  private unsuscribe$ : Subject<void> = new Subject();

  constructor(private service: OrdersService) { }

  private loadData() : void {
    this.service.getOrders()
    .pipe(
      takeUntil(this.unsuscribe$)
    ).subscribe(x => {
      this.ordersProcessing = [...x.ListOrders.filter((x: Order) => x.status === "0")];
      this.ordersReady = [...x.ListOrders.filter((x: Order) => x.status === "1")];
    })
  }

  reload(e: boolean): void {
    if(e) {
      this.loadData();
    }
  }

  ngOnInit(): void {
    this.loadData();
  }

}
