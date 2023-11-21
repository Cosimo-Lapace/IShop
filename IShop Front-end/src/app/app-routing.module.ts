import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-components/product-list/product-list.component';
import { Error404Component } from './error/error404/error404.component';
import { ProductDetailComponent } from './components/product-components/product-detail/product-detail.component';
import { CartDetailComponent } from './components/cart-components/cart-detail/cart-detail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrdersComponent } from './components/back-office/orders/orders.component';

const routes: Routes = [
  {
    path:'products/:id',
    component:ProductDetailComponent,
  },
  {
    path:'search/:productname',
    component:ProductListComponent,
  },
  {
    path: 'category/:id',
    component: ProductListComponent,
  },
  {
    path: 'category',
    component: ProductListComponent,
  },
  {
    path:'cart/detail',
    component:CartDetailComponent
  },
  {
    path:'orders',
    component:OrdersComponent
  },
  {
    path:'checkout',
    component:CheckoutComponent
  },
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: '**',
  component: Error404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
