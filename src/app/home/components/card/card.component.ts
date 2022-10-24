import { HomeService } from './../../home.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Dish } from '../../types/dish';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() dish!: Dish;

  private unsuscribe$ : Subject<void> = new Subject();

  constructor(private homeService: HomeService) { }

  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

  ngOnInit(): void {

  }

}
