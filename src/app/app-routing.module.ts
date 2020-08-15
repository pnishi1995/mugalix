import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SubCategoriesComponent } from './pages/sub-categories/sub-categories.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';



const routes: Routes = [
  {
    path:'',redirectTo:'home', pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'categories',component:CategoriesComponent
  },
  {
    path:'subcategories',component:SubCategoriesComponent
  },
  {
    path:'product',component:ProductComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:'checkout',component:CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
