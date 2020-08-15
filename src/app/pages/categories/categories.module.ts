import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderMOdule } from '../../shared/components/header/header.module';
import { FooterModule } from '../../shared/components/footer/footer.module';




@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    HeaderMOdule,
    FooterModule

  ],
  exports:[CategoriesComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoriesModule { }
