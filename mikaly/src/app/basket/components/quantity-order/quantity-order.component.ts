import { Component, Input, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { BasketService } from '../../basket.service';
import { Dish } from '../../types/dish';

@Component({
  selector: 'app-quantity-order',
  templateUrl: './quantity-order.component.html',
  styleUrls: ['./quantity-order.component.scss']
})
export class QuantityOrderComponent implements OnInit {
  @Input() dish? :Dish;
  localQt?: number;

  private unsuscribe$ : Subject<void> = new Subject();

  constructor(private basketService: BasketService) { }

  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

  ngOnInit(): void {
    this.init();
  }

  private init() : void {
    this.basketService.getDishInBasket(this.dish!.id)
      .pipe(
        take(1),
        takeUntil(this.unsuscribe$)
      )
    .subscribe(x => {
      if(x){
        this.localQt = x?.qty;
      }

    })
  }

  remove(id: string) {
    this.basketService.removeDishinBasket(id);
  }

  changeQuantity(qt: number){
    const val = this.localQt! + qt;
    if(val <= 0) {
      this.remove(this.dish!.id);
    }else {
      this.basketService.getDishInBasket(this.dish!.id)
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
            this.basketService.updateBasket(this.dish!.id, dish);
          }
        }
      })
    }
  }


}
