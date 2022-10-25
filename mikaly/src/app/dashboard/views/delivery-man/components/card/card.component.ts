import { DeliveryManService } from './../../delivery-man.service';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Order } from '../../types/order';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() order!: Order;
  @Input() checked: boolean = false;
  @Output() load : EventEmitter<boolean> = new EventEmitter();

  private unsuscribe$: Subject<void> = new Subject();

  constructor(private deliveryManService: DeliveryManService) { }

  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

  ngOnInit(): void {
  }

  checkAction() : void {
    this.order.status = "2";
    this.deliveryManService.putOrder(this.order._id, this.order)
      .pipe(
        takeUntil(this.unsuscribe$)
      ).subscribe(x => {
        this.load.emit(true);
      })
  }

}
