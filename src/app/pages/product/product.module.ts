import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { HeaderMOdule } from '../../shared/components/header/header.module';
import { FooterModule } from '../../shared/components/footer/footer.module';
import { ProductService } from './product.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: ProductComponent,
  },
];

@NgModule({
  declarations: [ProductComponent],
  imports: [
    HeaderMOdule,
    FooterModule,
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    RouterModule,
  ],
  providers: [ProductService],
})
export class ProductModule {}
