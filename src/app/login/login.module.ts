import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '../shared/shared-matertial.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedMaterialModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AdminLoginComponent,
    SharedMaterialModule,
  ]
})
export class LoginModule {
  constructor() {
    console.log('Login Module loaded.');
  }
}
