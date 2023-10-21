import {
  AfterContentChecked,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css', '../header/header.component.css'],
})
export class ProductListComponent
  implements OnInit, AfterContentChecked, OnDestroy
{
  products: Product[] = [];
  currentCategoryId: number;
  searchMode: boolean = false;

  constructor(
    private productSerive: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  //if param productname exsist
  handleSearchProducts() {
    const searchInput: string = this.route.snapshot.paramMap.get('productname');
    this.productSerive
      .searchProductByName(searchInput)
      .subscribe((data) => (this.products = data));
  }

  //else
  //search by Product-categoryId
  getRouteParamsById() {
    // check id exist
    const isCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    if (isCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
    } else {
      //else return in category 1
      this.currentCategoryId = 1;
    }
    //send in view page
    this.productSerive
      .getProductByCategoryId(this.currentCategoryId)
      .subscribe((data) => (this.products = data));
    //end search by product-categoryId
  }

  getProductList() {
    //send all product in view page
    this.productSerive.getProductList().subscribe((data) => {
      this.products = data;
    });
    // end get all product
  }

  //lifecycle
  ngOnInit(): void {
    // check if params id not exist and id === 0 for external manage by user
    this.route.paramMap.subscribe(() => {
      if (this.route.snapshot.paramMap.has('id')) {
        this.getRouteParamsById();
      } else if (this.route.snapshot.paramMap.has('productname')) {
        this.handleSearchProducts();
      } else {
        this.getProductList();
      }
    });
    //end check params
  }

  ngAfterContentChecked(): void {
    // fix issue for long text
    let description = document.querySelectorAll('.description');
    let name = document.querySelectorAll('.name');
    description.forEach((el, i) => {
      if (el.innerHTML.length > 101) {
        let text = el.innerHTML.slice(0, 101 - 3) + '...';
        el.innerHTML = text;
      }
      if (name[i].innerHTML.length < 25) {
        let nameText = name[i].innerHTML + '<br><br>';
        name[i].innerHTML = nameText;
      } else if (name[i].innerHTML.length > 40) {
        let nameTextSlice = name[i].innerHTML.slice(0, 40 - 3) + '...';
        name[i].innerHTML = nameTextSlice;
      }
    });
    //end fix
  }

  ngOnDestroy(): void {}
}
