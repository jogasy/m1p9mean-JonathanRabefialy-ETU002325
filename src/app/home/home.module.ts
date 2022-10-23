import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BasketComponent } from './components/basket/basket.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';



@NgModule({
  declarations: [
    HomeComponent,
    BasketComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
