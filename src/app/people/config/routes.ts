import { Routes } from '@angular/router';
import * as cmp from '../components/index';

export const routes: Routes = [
    {
        path: '', component: cmp.PeopleComponent, children: [{
            path: '', component: cmp.PeopleListComponent
        }]
    },
];