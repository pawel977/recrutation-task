import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import * as cmp from './components/index';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
    declarations: [
        cmp.MainComponent],
    exports: [
    ],
    imports: [
        SharedModule,
        MainRoutingModule
    ]
})
export class MainModule { }