import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import * as cmp from './components/index';
import { PeopleRoutingModule } from './people-routing.module';
@NgModule({
    declarations: [
        cmp.PeopleListComponent,
        cmp.PeopleComponent
        ],
    exports: [
    ],
    imports: [
        SharedModule,
        PeopleRoutingModule
    ]
})
export class PeopleModule { }