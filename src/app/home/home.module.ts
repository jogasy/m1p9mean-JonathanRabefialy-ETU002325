import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatherIconsModule } from './../../shared/feather-icons/feather-icons.module';
import { HomeComponent } from './home.component';
import { CardComponent } from './components/card/card.component';
import { BasketBtnComponent } from './components/basket-btn/basket-btn.component';
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
    TopBarComponent,
    CardComponent,
    BasketBtnComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FeatherIconsModule
  ]
})
export class HomeModule { }
