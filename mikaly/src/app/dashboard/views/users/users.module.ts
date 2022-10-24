import { FeatherIconsModule } from './../../../../shared/feather-icons/feather-icons.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

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
    FeatherIconsModule,
    RouterModule.forChild(route),
    ModalModule
  ],
  providers: [BsModalService]
})
export class UsersModule { }
