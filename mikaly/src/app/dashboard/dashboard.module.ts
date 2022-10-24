import { TopBarComponent } from '../dashboard/components/top-bar/top-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { AdminGuard } from './guards/admin.guard';

const route: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      },
      {
        path: 'users',
        loadChildren: () => import("../dashboard/views/users/users.module").then(m => m.UsersModule),
        canActivate: [AdminGuard]
      },
      {
        path: 'delivery',
        loadChildren: () => import("../dashboard/views/delivery-man/delivery-man.module").then(m => m.DeliveryManModule)
      },
      {
        path: 'orders',
        loadChildren: () => import("../dashboard/views/orders/orders.module").then(m => m.OrdersModule),
        canActivate: [AdminGuard]
      },
      {
        path: 'dish',
        loadChildren: () => import("../dashboard/views/dish/dish.module").then(m => m.DishModule),
        canActivate: [AdminGuard]
      }
    ]
  }
]
@NgModule({
  declarations: [
    DashboardComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  providers: [DashboardService]
})
export class DashboardModule { }
