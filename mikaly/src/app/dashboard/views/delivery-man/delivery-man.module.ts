import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryManComponent } from './delivery-man.component';
import { CardComponent } from './components/card/card.component';
import { DeliveryManService } from './delivery-man.service';
import { HourPipe } from './pipes/hour.pipe';

const route: Routes = [
  {
    path: '',
    component: DeliveryManComponent
  }
]

@NgModule({
  declarations: [
    DeliveryManComponent,
    CardComponent,
    HourPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(route)
  ],
  providers: [DeliveryManService]
})
export class DeliveryManModule { }
