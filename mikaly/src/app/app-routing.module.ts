import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './dashboard/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("src/app/home/home.module").then(m => m.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import("src/app/home/home.module").then(m => m.HomeModule)
  },
  {
    path: 'basket',
    loadChildren: () => import("src/app/basket/basket.module").then(m => m.BasketModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import("src/app/dashboard/dashboard.module").then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import("src/app/login/login.module").then(m => m.LoginModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
