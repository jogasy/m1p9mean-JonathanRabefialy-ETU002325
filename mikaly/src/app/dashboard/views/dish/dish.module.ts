import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishComponent } from './dish.component';
import { CardComponent } from './components/card/card.component';
import { FeatherIconsModule } from 'src/shared/feather-icons/feather-icons.module';
import { DishService } from './dish.service';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';

const route: Routes = [
  {
    path: '',
    component: DishComponent
  }
]

@NgModule({
  declarations: [
    DishComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(route),
    FeatherIconsModule,
    ModalModule
  ],
  providers: [DishService, BsModalService]
})
export class DishModule { }
