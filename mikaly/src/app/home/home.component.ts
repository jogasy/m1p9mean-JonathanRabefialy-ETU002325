import { Observable } from 'rxjs';
import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { Dish } from './types/dish';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data$: Observable<Dish[]> = this.service.getData();

  constructor(private service: HomeService) { }

  ngOnInit(): void {
  }

}
