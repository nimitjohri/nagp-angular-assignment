import { NgModule } from '@angular/core';
import { SharedMaterialModule } from '../shared/shared-matertial.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import { StatesComponent } from './states/states.component';
import { HttpClientModule } from '@angular/common/http';
import { DistrictsComponent } from './districts/districts.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CovidInMemoryDataService } from '../shared/inMemoryDataServices/covid-in-memory-data.service';
import { RouterModule, Routes } from '@angular/router';
import { EditNewsComponent } from './edit-news/edit-news.component';

@NgModule({
  declarations: [
    DashboardComponent,
    StatesComponent,
    DistrictsComponent,
    AddNewsComponent,
    EditNewsComponent,
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      CovidInMemoryDataService,  {dataEncapsulation: false, passThruUnknownUrl: true, }
    ),
    RouterModule,
    DashBoardRoutingModule,
    SharedMaterialModule
  ],
  exports: [
    RouterModule,
    DashBoardRoutingModule,
    SharedMaterialModule
  ]
})
export class DashboardModule {
  constructor() {
    console.log('Dashboard Module loaded.');
  }
}
