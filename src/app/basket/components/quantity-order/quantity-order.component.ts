import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-order',
  templateUrl: './quantity-order.component.html',
  styleUrls: ['./quantity-order.component.scss']
})
export class QuantityOrderComponent implements OnInit {
  @Input() localQt: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  remove() {}

  changeQuantity(qt: number){}

}
