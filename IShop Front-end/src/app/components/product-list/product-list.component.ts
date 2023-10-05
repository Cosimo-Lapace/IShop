import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css','../header/header.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  private ProductsSubscription: Subscription;

  constructor(private productSerive: ProductService) {}

  ngOnInit(): void {
    this.ProductsSubscription = this.productSerive
      .getProductList()
      .subscribe((data) => {
        this.products = data;
        console.log(this.products);
      });

  }

  ngOnDestroy(): void {
    this.ProductsSubscription.unsubscribe();
  }
}
