import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { DataComponent } from './components/data/data.component';
import { ContentComponent } from './components/content/content.component';
import { FeatherIconsModule } from 'src/shared/feather-icons/feather-icons.module';
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
    TopBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FeatherIconsModule
  ]
})
export class BasketModule { }
