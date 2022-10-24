import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { CardComponent } from './components/card/card.component';

const route: Routes = [
  {
    path: '',
    component: OrdersComponent
  }
]

@NgModule({
  declarations: [
    OrdersComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class OrdersModule { }
