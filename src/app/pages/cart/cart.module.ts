import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { HeaderMOdule } from '../../shared/components/header/header.module';
import { FooterModule } from '../../shared/components/footer/footer.module';



@NgModule({
  declarations: [CartComponent],
  imports: [
  CommonModule,
    HeaderMOdule,
    FooterModule
  ]
})
export class CartModule { }
