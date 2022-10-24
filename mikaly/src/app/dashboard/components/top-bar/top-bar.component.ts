import { DashboardService } from './../../dashboard.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  type$? : Observable<number> = this.dashboardService.type$;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
  }

}
