import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BasketComponent } from './components/basket/basket.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

const route: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    BasketComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class HomeModule { }
