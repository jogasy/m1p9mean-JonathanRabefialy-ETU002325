import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FeatherIconsModule } from './../../../../shared/feather-icons/feather-icons.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { UsersService } from './users.service';
import { RolePipe } from './pipes/role.pipe';

const route: Routes = [
  {
    path: '',
    component: UsersComponent
  }
]

@NgModule({
  declarations: [
    UsersComponent,
    RolePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    FeatherIconsModule,
    HttpClientModule,
    RouterModule.forChild(route),
    ModalModule
  ],
  providers: [BsModalService, UsersService]
})
export class UsersModule { }
