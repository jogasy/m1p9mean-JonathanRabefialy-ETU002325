import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basket-btn',
  templateUrl: './basket-btn.component.html',
  styleUrls: ['./basket-btn.component.scss'],
  animations: [
    trigger('skewZoom', [
      transition(':increment', [
        animate("0.5s ease", keyframes([
          style({ transform: "rotate(0deg) scale(1)" }), // offset = 0
          style({ transform: "rotate(24deg) scale(1.2)" }), // offset = 0.5
          style({ transform: "rotate(0deg) scale(1)" }), // offset = 1
        ]))
      ])
    ]),
  ]
})
export class BasketBtnComponent implements OnInit {
  shoppingCount$!: Observable<number>;
  constructor() { }

  ngOnInit(): void {
  }

}
function Of(arg0: number): Observable<number> {
  throw new Error('Function not implemented.');
}

