import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-components/product-list/product-list.component';
import { Error404Component } from './error/error404/error404.component';
import { ProductDetailComponent } from './components/product-components/product-detail/product-detail.component';

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
