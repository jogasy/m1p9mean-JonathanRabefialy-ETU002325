import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryManComponent } from './delivery-man.component';
import { CardComponent } from './components/card/card.component';

const route: Routes = [
  {
    path: '',
    component: DeliveryManComponent
  }
]

@NgModule({
  declarations: [
    DeliveryManComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class DeliveryManModule { }
