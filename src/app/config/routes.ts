import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', loadChildren: () => import('../home/main.module').then(m => m.MainModule) },

    { path: '**', component: PageNotFoundComponent },
];