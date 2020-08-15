import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { HeaderMOdule } from '../../shared/components/header/header.module';
import { FooterModule } from '../../shared/components/footer/footer.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    HeaderMOdule,
    FooterModule,
    ReactiveFormsModule
  ],
  exports:[CheckoutComponent]
})
export class CheckoutModule { }
