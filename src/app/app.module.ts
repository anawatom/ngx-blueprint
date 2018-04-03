import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  RouterModule,
} from '@angular/router';


import {
  FormlyModule,
} from '@ngx-formly/core';
import {
  FormlyBootstrapModule,
} from '@ngx-formly/bootstrap';
import {
  BsDropdownModule,
} from 'ngx-bootstrap';


import { MatIconModule } from '@angular/material/icon';


import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import {
  DemoModule,
  DemoService,
} from './modules';
import {
  FooterComponent,
  HeaderComponent,
  SideNavigationComponent,
} from './shared/components';
import {
  IndexPageComponent,
  NotFoundPageComponent,
} from './shared/pages';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    IndexPageComponent,
    NotFoundPageComponent,
    SideNavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot(),
    DemoModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    DemoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
