import { Component } from '@angular/core';
import { ProductCategory } from 'src/app/model/product-category';
import { ProductCategoryService } from 'src/app/services/product-category.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css', '../../sidenav/sidenav.component.css']
})
export class ProductCategoryComponent {
  productCategory: ProductCategory[] = [];
  constructor(private productCategorySerice: ProductCategoryService,){}


  ngOnInit(): void {
    this.productCategorySerice.getProductList().subscribe(data => {
       this.productCategory = data
    })
}
}
