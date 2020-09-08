import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderMOdule } from '../../shared/components/header/header.module';
import { FooterModule } from '../../shared/components/footer/footer.module';
import { Routes, RouterModule } from '@angular/router';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { SubCategoriesService } from './sub-categories/sub-categories.service';
import { LoaderModule } from '../loader/loader.module';


const routes:Routes =[
  {
  path:'', 
  loadChildren:()=> import('./sub-categories/sub-categories.module').then((m)=>m.SubCategoriesModule)
  },
  {
    path:'subcategory',
    loadChildren:()=> import('./sub-categories/sub-categories.module').then((m)=>m.SubCategoriesModule)
  },
  {
    path:'subcategory/:subcategoryId',
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
    LoaderModule
  ],
  exports:[CategoriesComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers:[SubCategoriesService]
})
export class CategoriesModule { }
