import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { DataComponent } from './components/data/data.component';
import { ContentComponent } from './components/content/content.component';

const route: Routes = [
  {
    path: '',
    component: BasketComponent
  }
]

@NgModule({
  declarations: [BasketComponent, DataComponent, ContentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class BasketModule { }
