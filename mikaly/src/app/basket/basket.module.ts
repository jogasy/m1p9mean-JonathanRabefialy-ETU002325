import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FeatherIconsModule } from 'src/shared/feather-icons/feather-icons.module';
import { BasketComponent } from './basket.component';
import { BasketService } from './basket.service';
import { ContentComponent } from './components/content/content.component';
import { DataComponent } from './components/data/data.component';
import { QuantityOrderComponent } from './components/quantity-order/quantity-order.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

const route: Routes = [
  {
    path: '',
    component: BasketComponent
  }
]

@NgModule({
  declarations: [
    BasketComponent,
    DataComponent,
    ContentComponent,
    TopBarComponent,
    QuantityOrderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(route),
    FeatherIconsModule
  ],
  providers: [BasketService]
})
export class BasketModule { }
