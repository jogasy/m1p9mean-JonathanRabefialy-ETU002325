import { BasketService } from './../../basket.service';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../../types/dish';

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

}
