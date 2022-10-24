import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-basket-btn',
  templateUrl: './basket-btn.component.html',
  styleUrls: ['./basket-btn.component.scss'],
})
export class BasketBtnComponent implements OnInit {
  shoppingCount$: Observable<number> = this.homeService.shoppingCount$;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

}

