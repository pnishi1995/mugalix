import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubCategoriesComponent } from './sub-categories.component';
import { HeaderMOdule } from '../../../shared/components/header/header.module';
import { FooterModule } from '../../../shared/components/footer/footer.module';




@NgModule({
  declarations: [SubCategoriesComponent],
  imports: [
  CommonModule,
    HeaderMOdule,
    FooterModule
  ]
})
export class SubCategoriesModule { }
