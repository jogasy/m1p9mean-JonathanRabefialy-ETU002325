import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../../types/dish';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() dish?: Dish;
  constructor() { }

  ngOnInit(): void {
  }

  addToBasket() {

  }

}
