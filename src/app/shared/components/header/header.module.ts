import { HeaderComponent } from "./header.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
    declarations:[HeaderComponent],
    imports:[],
    exports:[HeaderComponent],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class HeaderMOdule{}
