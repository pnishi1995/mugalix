import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { HeaderMOdule } from '../../shared/components/header/header.module';
import { FooterModule } from '../../shared/components/footer/footer.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SingUpOrSingInModule } from '../sing-up-or-sing-in/sing-up-or-sing-in.module';
import { LoaderModule } from '../loader/loader.module';



@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    SingUpOrSingInModule,
    CommonModule,
    HeaderMOdule,
    FooterModule,
    ReactiveFormsModule,
    LoaderModule
  ],
  exports:[CheckoutComponent]
})
export class CheckoutModule { }
