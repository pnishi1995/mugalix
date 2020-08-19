import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";


import { AppComponent } from './app.component';
import { HomeModule } from "./pages/home/home.module";
import { HeaderMOdule } from "src/app/shared/components/header/header.module";
import { CommonModule } from '@angular/common';
import { CategoriesModule } from "./pages/categories/categories.module";
import { FooterModule } from './shared/components/footer/footer.module';
import { SubCategoriesModule } from "./pages/categories/sub-categories/sub-categories.module";
import { CartModule } from './pages/cart/cart.module';
import { ProductModule } from './pages/product/product.module';
import { CheckoutModule } from './pages/checkout/checkout.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CheckoutModule,
    ProductModule,
    CartModule,
    SubCategoriesModule,
    FooterModule,
    CategoriesModule,
    CommonModule,
    HeaderMOdule ,
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
