import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/people'},
    { path: 'people',  loadChildren: () => import('../people/people.module').then(m => m.PeopleModule ) },

    { path: '**', component: PageNotFoundComponent },
];