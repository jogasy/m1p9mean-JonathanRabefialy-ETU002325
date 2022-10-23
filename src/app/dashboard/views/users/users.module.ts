import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const route: Routes = [
  {
    path: '',
    component: UsersComponent
  }
]

@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class UsersModule { }
