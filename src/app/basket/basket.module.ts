import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';

const route: Routes = [
  {
    path: '',
    component: BasketComponent
  }
]

@NgModule({
  declarations: [BasketComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class BasketModule { }
