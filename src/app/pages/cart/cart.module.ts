import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { HeaderMOdule } from '../../shared/components/header/header.module';
import { FooterModule } from '../../shared/components/footer/footer.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CartComponent],
  imports: [
    RouterModule,
    SharedModule,
    CommonModule,
    HeaderMOdule,
    FooterModule
  ]
})
export class CartModule { }
