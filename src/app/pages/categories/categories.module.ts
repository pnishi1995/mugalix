import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderMOdule } from '../../shared/components/header/header.module';
import { FooterModule } from '../../shared/components/footer/footer.module';
import { Routes, RouterModule } from '@angular/router';
import { SubCategoriesService } from './sub-categories/sub-categories.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./sub-categories/sub-categories.module').then(
        (m) => m.SubCategoriesModule
      ),
  },
  {
    path: 'subcategory',
    loadChildren: () =>
      import('./sub-categories/sub-categories.module').then(
        (m) => m.SubCategoriesModule
      ),
  },
  {
    path: 'subcategory/:subcategoryId',
    loadChildren: () =>
      import('./sub-categories/sub-categories.module').then(
        (m) => m.SubCategoriesModule
      ),
  },
];

@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    HeaderMOdule,
    FooterModule,
    RouterModule.forChild(routes),
  ],
  exports: [CategoriesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [SubCategoriesService],
})
export class CategoriesModule {}
