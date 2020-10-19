import { NgModule } from '@angular/core';
import * as cmp from './components/index';

@NgModule({
    declarations: [
        cmp.NavComponent,
        cmp.PageNotFoundComponent        
    ],
    exports: [
        cmp.NavComponent,
        cmp.PageNotFoundComponent
    ],
    imports: [
    ]
})
export class SharedModule { }