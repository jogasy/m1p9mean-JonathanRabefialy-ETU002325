import { DishService } from './dish.service';
import { Component, OnInit } from '@angular/core';
import { Dish } from './types/dish';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  data$: Observable<Dish[]> = this.service.getData();
  constructor(private service: DishService) { }

  ngOnInit(): void {
  }

}
