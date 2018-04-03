import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { MatIconModule } from '@angular/material/icon';


import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';


import {
  NgxDatatableModule,
} from '@swimlane/ngx-datatable';


import { demoRoutes } from './demo.routes';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';
import { DemoDetailPageComponent } from './pages/demo-detail-page/demo-detail-page.component';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    MatIconModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule,
    RouterModule.forChild(demoRoutes),
  ],
  declarations: [DemoPageComponent, DemoDetailPageComponent]
})
export class DemoModule { }
