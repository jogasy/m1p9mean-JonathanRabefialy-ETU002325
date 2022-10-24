import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish } from '../../types/dish';
import { BasketService } from './../../basket.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  basket$: Observable<Dish[]> = this.basketService.basket$;
  totalPrice$ : Observable<number> = this.basketService.totalPrice$;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
  }

  deleteDish(id: string): void {
    this.basketService.removeDishinBasket(id);
  }

}
