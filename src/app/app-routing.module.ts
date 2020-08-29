import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';



const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'category',
    loadChildren:()=> import('./pages/categories/categories.module').then((m)=>m.CategoriesModule)
  },
  {
    path:'category/:categoryId',
    loadChildren:()=> import('./pages/categories/categories.module').then((m)=>m.CategoriesModule)
  },
  {
    path:'product',component:ProductComponent
  },
  {
    path:'product/id/:productId',component:ProductComponent
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
