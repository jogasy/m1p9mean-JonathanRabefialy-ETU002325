import { Dish } from './../../types/dish';
import { takeUntil, Subject, take } from 'rxjs';
import { HomeService } from './../../home.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-quantity-order',
  templateUrl: './quantity-order.component.html',
  styleUrls: ['./quantity-order.component.scss']
})
export class QuantityOrderComponent implements OnInit, OnDestroy {
  @Input() dish? :Dish;
  localQt?: number;

  showQtyOrder!: boolean;

  private unsuscribe$ : Subject<void> = new Subject();

  constructor(private homeService: HomeService) { }

  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

  ngOnInit(): void {
    this.init();
  }

  private init() : void {
    this.homeService.getDishInBasket(this.dish!.id)
    .pipe(
      takeUntil(this.unsuscribe$)
    )
    .subscribe(x => {
      if(x){
        (x.qty!) <= 0 || (x.qty) === undefined || (x.qty) === null? this.showQtyOrder = false : this.showQtyOrder = true;
        this.localQt = x?.qty;
      }

    })
  }

  addToBasket() {
    this.homeService.createBasket(this.dish!);
    this.init();
  }

  remove(id: string) {
    this.homeService.removeDishinBasket(id);
  }

  changeQuantity(qt: number){
    const val = this.localQt! + qt;
    if(val <= 0) {
      this.remove(this.dish!.id);
      this.showQtyOrder = false;
    }else {
      this.homeService.getDishInBasket(this.dish!.id)
      .pipe(
        take(1),
        takeUntil(this.unsuscribe$)
      )
      .subscribe(x => {
        if (this.dish) {
          const dish: Dish = {
            id: this.dish.id,
            name: this.dish.name,
            img: this.dish.img,
            ingredients: this.dish.ingredients,
            price: this.dish.price,
            status: this.dish.status,
            qty: val
          }
          if (x) {
            this.homeService.updateBasket(this.dish!.id, dish);
          }
        }
      })
    }
  }

}
