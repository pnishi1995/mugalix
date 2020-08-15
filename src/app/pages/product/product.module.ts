import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { HeaderMOdule } from '../../shared/components/header/header.module';
import { FooterModule } from '../../shared/components/footer/footer.module';




@NgModule({
  declarations: [ProductComponent],
  imports: [HeaderMOdule,
    FooterModule,
    CommonModule,
  ]
})
export class ProductModule { }
