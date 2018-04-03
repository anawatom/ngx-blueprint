import {
  Routes,
} from '@angular/router';


import {
  DemoDetailPageComponent,
  DemoPageComponent,
} from './pages';

export const demoRoutes: Routes = [
  {
    path: 'demo/:id',
    component: DemoDetailPageComponent,
  },
  {
    path: 'demo',
    component: DemoPageComponent,
  },
];
