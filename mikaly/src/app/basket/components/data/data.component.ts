import { takeUntil, Subject, Observable } from 'rxjs';
import { BasketService } from './../../basket.service';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Order } from '../../types/order';
import { Dish } from '../../types/dish';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit, OnDestroy {
  name: string = '';
  phoneNumber: string = '';
  address: string = '';
  note: string = '';

  private unsuscribe$: Subject<void> = new Subject();

  @ViewChild("checkMorning", {static: true}) checkMorning?: ElementRef;
  @ViewChild("checkEvening", {static: true}) checkEvening?: ElementRef;

  constructor(private basketService: BasketService) { }

  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

  ngOnInit(): void {
  }

  private resetData(): void {
    this.name = '';
    this.phoneNumber = '';
    this.address = '';
    this.note = '';
  }

  onSave(): void {
    let dish: Dish[] = [];
    let total: string = '';
    this.basketService.basket$
      .pipe(
        takeUntil(this.unsuscribe$)
      ).subscribe(x => dish = [...x])
      this.basketService.totalPrice$.pipe(
        takeUntil(this.unsuscribe$)
      ).subscribe(x => total = x.toString());
    const order: Order = {
      _id: '',
      name: this.name,
      phoneNumber: this.phoneNumber,
      address: this.address,
      hour: this.checkEvening?.nativeElement.checked ? "1" : "0",
      note: this.note,
      status: "0",
      total: total,
      basket: dish
    }
    this.basketService.saveOrder(order)
        .pipe(
          takeUntil(this.unsuscribe$)
        ).subscribe(console.log);
    this.resetData();
    this.basketService.resetBasket();
  }

}
