import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Error404Component } from './error/error404/error404.component';

const routes: Routes = [
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
    path: '*',
  component: Error404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
