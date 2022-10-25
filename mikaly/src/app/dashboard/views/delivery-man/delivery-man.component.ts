import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DeliveryManService } from './delivery-man.service';
import { Order } from './types/order';

@Component({
  selector: 'app-delivery-man',
  templateUrl: './delivery-man.component.html',
  styleUrls: ['./delivery-man.component.scss']
})
export class DeliveryManComponent implements OnInit, OnDestroy {
  ordersReady: Order[]= [];

  private unsuscribe$ : Subject<void> = new Subject();

  constructor(private service: DeliveryManService) { }
  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

  private loadData() : void {
    this.service.getOrders()
    .pipe(
      takeUntil(this.unsuscribe$)
    ).subscribe(x => {
      this.ordersReady = [...x.ListOrders.filter((x: Order) => x.status !== "0")];
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
