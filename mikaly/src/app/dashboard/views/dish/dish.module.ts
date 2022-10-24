import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishComponent } from './dish.component';
import { CardComponent } from './components/card/card.component';
import { FeatherIconsModule } from 'src/shared/feather-icons/feather-icons.module';
import { DishService } from './dish.service';

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
    RouterModule.forChild(route),
    FeatherIconsModule
  ],
  providers: [DishService]
})
export class DishModule { }
