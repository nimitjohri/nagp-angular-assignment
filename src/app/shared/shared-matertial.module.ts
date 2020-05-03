import { NgModule } from '@angular/core';
import { PageHeaderComponent } from './page-header/page-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [PageHeaderComponent, PageFooterComponent, PageNotFoundComponent],
  imports: [
    RouterModule,
    HttpClientModule,
    CommonModule,
    MatTableModule,
    MatExpansionModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    ToastrModule.forRoot()
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatExpansionModule,
    PageHeaderComponent,
    PageFooterComponent,
    ToastrModule
  ]
})

export class SharedMaterialModule {
  constructor() {
    console.log('Shared Material module loaded.');
  }
}
