import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: 'dashboard',
    loadChildren: () => import("src/app/dashboard/dashboard.module").then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
