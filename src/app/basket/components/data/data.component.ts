import { takeUntil, Subject } from 'rxjs';
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

  onSave(): void {
    let dish: Dish[] = [];
    this.basketService.basket$
      .pipe(
        takeUntil(this.unsuscribe$)
      ).subscribe(x => dish = [...x])
    const order: Order = {
      name: this.name,
      phoneNumber: this.phoneNumber,
      address: this.address,
      hour: this.checkEvening?.nativeElement.checked ? 1 : 0,
      note: this.note,
      status: 0,
      basket: dish
    }
    this.basketService.resetBasket();
  }

}
