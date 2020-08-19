import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderMOdule } from '../../shared/components/header/header.module';
import { FooterModule } from '../../shared/components/footer/footer.module';
import { Routes, RouterModule } from '@angular/router';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { HomeComponent } from '../home/home.component';

const routes:Routes =[
  {
  path:'categories',redirectTo:'subcategories',pathMatch:'full'
  },
  {
    path:'subcategories',
    loadChildren:()=> import('./sub-categories/sub-categories.module').then((m)=>m.SubCategoriesModule)
  },
  
  
]



@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    HeaderMOdule,
    FooterModule,
    RouterModule.forChild(routes),

  ],
  exports:[CategoriesComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoriesModule { }
