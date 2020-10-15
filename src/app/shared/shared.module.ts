import { NgModule } from '@angular/core';
import * as cmp from './components/index';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        cmp.NavComponent,
        PageNotFoundComponent        
    ],
    exports: [
    ],
    imports: [
    ]
})
export class SharedModule { }