import { Subject, takeUntil } from 'rxjs';
import { Component, Input, OnInit, ViewChild, ElementRef, OnDestroy, Output, EventEmitter } from '@angular/core';
import { OrdersService } from '../../orders.service';
import { Order } from '../../types/order';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit , OnDestroy {
  @Input() order!: Order;
  @Input() checkedbtn: boolean = false;
  @ViewChild("checked", {static: true}) check!: ElementRef;
  @Output() load : EventEmitter<boolean> = new EventEmitter();

  private unsuscribe$: Subject<void> = new Subject();

  constructor(private orderService: OrdersService) { }

  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

  ngOnInit(): void {
  }

  checkAction() : void {
    this.order.status = this.check.nativeElement.checked ? "1" : "0";
    this.orderService.putOrder(this.order._id, this.order)
      .pipe(
        takeUntil(this.unsuscribe$)
      ).subscribe(x => {
        this.load.emit(true);
      })
  }

}
