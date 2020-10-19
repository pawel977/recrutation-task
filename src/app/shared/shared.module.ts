import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import * as cmp from './components/index';

@NgModule({
    declarations: [
        cmp.NavComponent,
        cmp.PageNotFoundComponent        
    ],
    exports: [
        cmp.NavComponent,
        cmp.PageNotFoundComponent,
        CommonModule
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }