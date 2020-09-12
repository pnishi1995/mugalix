import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubCategoriesComponent } from './sub-categories.component';
import { HeaderMOdule } from '../../../shared/components/header/header.module';
import { FooterModule } from '../../../shared/components/footer/footer.module';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../../../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


const route: Routes = [
  {
    path: '',
    component: SubCategoriesComponent,
  },
];

@NgModule({
  declarations: [SubCategoriesComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    SharedModule,
    HeaderMOdule,
    FooterModule,
    RouterModule.forChild(route),
    NgxPaginationModule
  ],
})
export class SubCategoriesModule {}
