import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { dashboardRoutes } from './dashboard/dashboard-routing.module';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { LoginModule } from './login/login.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'login', component: AdminLoginComponent },
  {path: 'dashboard', component: DashboardComponent, children: [... dashboardRoutes]},
  {path: '**', component: PageNotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DashboardModule,
    LoginModule,
  ],
  exports: [
    RouterModule,
    DashboardModule,
    LoginModule,
  ]
})
export class AppRoutingModule { }
