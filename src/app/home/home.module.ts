import { FeatherIconsModule } from './../../shared/feather-icons/feather-icons.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
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
    TopBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FeatherIconsModule
  ]
})
export class HomeModule { }
