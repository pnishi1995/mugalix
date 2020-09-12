import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { HeaderMOdule } from './shared/components/header/header.module';
import { CommonModule } from '@angular/common';
import { CategoriesModule } from './pages/categories/categories.module';
import { FooterModule } from './shared/components/footer/footer.module';
import { SubCategoriesModule } from './pages/categories/sub-categories/sub-categories.module';
import { CartModule } from './pages/cart/cart.module';
import { ProductModule } from './pages/product/product.module';
import { CheckoutModule } from './pages/checkout/checkout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../app/shared/services/common.service';
import { SingUpOrSingInModule } from './pages/sing-up-or-sing-in/sing-up-or-sing-in.module';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './shared/services/interceptor.service';
import { SharedModule } from './shared/shared.module';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [AppComponent],
  imports: [
    SingUpOrSingInModule,
    CheckoutModule,
    ProductModule,
    SharedModule,
    CartModule,
    SubCategoriesModule,
    FooterModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    CategoriesModule,
    CommonModule,
    HeaderMOdule,
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    CommonService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
