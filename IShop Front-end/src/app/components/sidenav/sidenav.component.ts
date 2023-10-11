import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/model/product-category';
import { ProductCategoryService } from 'src/app/services/product-category.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  productCaegoryId : number = 1;
  productCategory: ProductCategory[] = [];
  constructor(private productCategorySerice: ProductCategoryService,){}


  ngOnInit(): void {
    this.productCategorySerice.getProductList().subscribe(data => {
       this.productCategory = data
    })

  }
}
