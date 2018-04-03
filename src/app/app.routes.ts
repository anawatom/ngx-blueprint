import {
    Routes,
} from '@angular/router';


import {
    IndexPageComponent,
    NotFoundPageComponent,
} from './shared/pages';

export const appRoutes: Routes = [
    {
        path: 'index',
        component: IndexPageComponent,
    },
    {
        path: '',
        component: IndexPageComponent,
    },
    {
        path: '**',
        component: NotFoundPageComponent,
    }
];
