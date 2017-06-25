import { NgModule } from '@angular/core';
import {
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdGridListModule,
    MdCardModule,
    MdListModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdMenuModule,
    MdDialogModule
} from '@angular/material';

@NgModule({
    imports: [
        MdToolbarModule, MdIconModule, MdButtonModule, MdGridListModule,
        MdCardModule, MdListModule, MdInputModule, MdProgressSpinnerModule,
        MdMenuModule, MdDialogModule
    ],
    exports: [
        MdToolbarModule, MdIconModule, MdButtonModule, MdGridListModule,
        MdCardModule, MdListModule, MdInputModule, MdProgressSpinnerModule,
        MdMenuModule, MdDialogModule
    ]
})
export class MaterialWrapModule { }
