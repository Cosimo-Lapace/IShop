import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-components/product-list/product-list.component';
import { ProductCategoryComponent } from './components/product-components/product-category/product-category.component';
import { ProductDetailComponent } from './components/product-components/product-detail/product-detail.component';
import { ProductNotFoundComponent } from './utilities/product-not-found/product-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './components/page-components/sidenav/sidenav.component';
import { HeaderComponent } from './components/page-components/header/header.component';
import { FooterComponent } from './components/page-components/footer/footer.component';
import { Error404Component } from './error/error404/error404.component';
import { SearchComponent } from './components/page-components/search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerComponent } from './utilities/spinner/spinner.component';
import { CartStatusComponent } from './components/page-components/cart-status/cart-status.component';
import { CartDetailComponent } from './components/cart-components/cart-detail/cart-detail.component';
import { ButtonComponent } from './utilities/button/button.component';
import { BackToProductListComponent } from './utilities/back-to-product-list/back-to-product-list.component';
import { CartDetailMobileComponent } from './components/cart-components/cart-detail-mobile/cart-detail-mobile.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageCheckoutComponent } from './utilities/error-message-checkout/error-message-checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    Error404Component,
    ProductCategoryComponent,
    SearchComponent,
    ProductDetailComponent,
    SpinnerComponent,
    ProductNotFoundComponent,
    CartStatusComponent,
    CartDetailComponent,
    ButtonComponent,
    BackToProductListComponent,
    CartDetailMobileComponent,
    CheckoutComponent,
    ErrorMessageCheckoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
