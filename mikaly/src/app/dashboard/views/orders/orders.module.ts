import { OrdersService } from './orders.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { CardComponent } from './components/card/card.component';
import { HourPipe } from './pipes/hour.pipe';

const route: Routes = [
  {
    path: '',
    component: OrdersComponent
  }
]

@NgModule({
  declarations: [
    OrdersComponent,
    CardComponent,
    HourPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    HttpClientModule
  ],
  providers: [OrdersService]
})
export class OrdersModule { }
