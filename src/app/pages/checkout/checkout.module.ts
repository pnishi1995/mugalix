import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { HeaderMOdule } from '../../shared/components/header/header.module';
import { FooterModule } from '../../shared/components/footer/footer.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SingUpOrSingInModule } from '../sing-up-or-sing-in/sing-up-or-sing-in.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
  },
];

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    SingUpOrSingInModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderMOdule,
    RouterModule.forChild(routes),
    FooterModule,
    ReactiveFormsModule,
  ],
  exports: [CheckoutComponent],
})
export class CheckoutModule {}
