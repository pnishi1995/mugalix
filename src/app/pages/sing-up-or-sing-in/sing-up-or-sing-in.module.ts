import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingUpOrSingInComponent } from './sing-up-or-sing-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SingUpOrSingInService } from "./sing-up-or-sing-in.service";


@NgModule({
  declarations: [SingUpOrSingInComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[SingUpOrSingInComponent],
  providers:[SingUpOrSingInService]
})
export class SingUpOrSingInModule { }
