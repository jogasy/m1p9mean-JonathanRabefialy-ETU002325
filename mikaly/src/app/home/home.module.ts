import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatherIconsModule } from './../../shared/feather-icons/feather-icons.module';
import { HomeComponent } from './home.component';
import { CardComponent } from './components/card/card.component';
import { BasketBtnComponent } from './components/basket-btn/basket-btn.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HomeService } from './home.service';
import { QuantityOrderComponent } from './components/quantity-order/quantity-order.component';

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
    BasketBtnComponent,
    QuantityOrderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(route),
    FeatherIconsModule
  ],
  providers: [HomeService]
})
export class HomeModule { }
