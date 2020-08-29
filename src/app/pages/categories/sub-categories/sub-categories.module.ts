import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubCategoriesComponent } from './sub-categories.component';
import { HeaderMOdule } from '../../../shared/components/header/header.module';
import { FooterModule } from '../../../shared/components/footer/footer.module';
import { RouterModule,Routes } from '@angular/router';

const route : Routes = [

  {
  path:'', component: SubCategoriesComponent
  }

]


@NgModule({
  declarations: [SubCategoriesComponent],
  imports: [
  CommonModule,
    HeaderMOdule,
    FooterModule,
    RouterModule.forChild(route)
  ]
})
export class SubCategoriesModule { }
