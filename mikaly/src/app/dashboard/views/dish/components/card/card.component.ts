import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Dish } from 'src/app/home/types/dish';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() dish!: Dish;

  private unsuscribe$ : Subject<void> = new Subject();

  constructor() { }

  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

  ngOnInit(): void {

  }

}
