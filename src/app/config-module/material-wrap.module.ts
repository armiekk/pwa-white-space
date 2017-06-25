import { NgModule } from '@angular/core';
import {
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdGridListModule,
    MdCardModule,
    MdListModule,
    MdInputModule,
    MdProgressSpinnerModule
} from '@angular/material';

@NgModule({
    imports: [
        MdToolbarModule, MdIconModule, MdButtonModule, MdGridListModule,
        MdCardModule, MdListModule, MdInputModule, MdProgressSpinnerModule
    ],
    exports: [
        MdToolbarModule, MdIconModule, MdButtonModule, MdGridListModule,
        MdCardModule, MdListModule, MdInputModule, MdProgressSpinnerModule
    ]
})
export class MaterialWrapModule { }
