import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import * as cmp from './components/index';
import * as srv from './services/index';
import { PeopleRoutingModule } from './people-routing.module';
import { PersonComponent } from './components/person/person.component';
@NgModule({
    declarations: [
        cmp.PeopleListComponent,
        cmp.PeopleComponent,
        PersonComponent
        ],
    exports: [
    ],
    imports: [
        SharedModule,
        PeopleRoutingModule
    ],
    providers: [
        srv.PeopleService
    ]
})
export class PeopleModule { }