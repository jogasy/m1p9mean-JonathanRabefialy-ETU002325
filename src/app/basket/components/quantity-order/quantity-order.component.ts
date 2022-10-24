import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../../types/dish';

@Component({
  selector: 'app-quantity-order',
  templateUrl: './quantity-order.component.html',
  styleUrls: ['./quantity-order.component.scss']
})
export class QuantityOrderComponent implements OnInit {
  @Input() dish!: Dish;
  localQt?: number;
  constructor() { }

  ngOnInit(): void {
    this.localQt = this.dish.qty;
  }

  remove() {}

  changeQuantity(qt: number){}

}
