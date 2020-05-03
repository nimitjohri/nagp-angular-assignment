import { NgModule } from '@angular/core';
import { NewsComponent } from './news/news.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialModule } from '../shared/shared-matertial.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatesComponent } from './states/states.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginModule } from '../login/login.module';
import { CanActivateAddNewsGuard } from '../login/can-activate-add-news.guard';
import { PrecautionsComponent } from './precautions/precautions.component';
import { EditNewsComponent } from './edit-news/edit-news.component';


export const dashboardRoutes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'precautions', component: PrecautionsComponent },
  { path: 'addnews', component: AddNewsComponent, canActivate: [CanActivateAddNewsGuard] },
  { path: 'news/editnews', component: EditNewsComponent, canActivate: [CanActivateAddNewsGuard] },
  { path: '', component: StatesComponent}
];

@NgModule({
  declarations: [
    NewsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    LoginModule,
    ReactiveFormsModule,
    SharedMaterialModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedMaterialModule
  ]
})

/**
 * This is the class that will be imported wherever needed.
 */
export class DashBoardRoutingModule { }
