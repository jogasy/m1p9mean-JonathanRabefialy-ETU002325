import { HomeService } from './../../home.service';
import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../../types/dish';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() dish?: Dish;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

  addToBasket(dish?: Dish) {
    console.log("dish", dish);
    if(dish){
      this.homeService.createBasket(dish).subscribe();
    }
  }

}
