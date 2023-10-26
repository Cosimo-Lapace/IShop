import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './components/page-components/sidenav/sidenav.component';
import { HeaderComponent } from './components/page-components/header/header.component';
import { FooterComponent } from './components/page-components/footer/footer.component';
import { Error404Component } from './error/error404/error404.component';
import { ProductCategoryComponent } from './components/product-components/product-category/product-category.component';
import { SearchComponent } from './components/page-components/search/search.component';
import { ProductDetailComponent } from './components/product-components/product-detail/product-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerComponent } from './utilities/spinner/spinner.component';
import { ProductNotFoundComponent } from './utilities/product-not-found/product-not-found.component';
import { CartStatusComponent } from './components/page-components/cart-status/cart-status.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
