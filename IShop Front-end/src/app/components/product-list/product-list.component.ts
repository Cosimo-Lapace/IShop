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
  searchOk = true;
  currentCategoryId: number;
  searchMode: boolean = false;
  //paginate
  pageNumber: number = 1; //number actually page
  pageSize: number = 12; //total page number
  totalElement: number = 0; //total elementi in the page
  //endpaginate

  constructor(
    private productSerive: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  pageChange() {
    this.ngOnInit();
  }
  //if param productname exsist
  handleSearchProducts() {
    const searchInput: string = this.route.snapshot.paramMap.get('productname');
    this.productSerive
      .searchProductByName(this.pageNumber - 1, this.pageSize,searchInput)
      .subscribe((data) => {
        (this.products = data._embedded.products),
          (this.pageNumber = data.page.number + 1),
          (this.pageSize = data.page.size);
        this.totalElement = data.page.totalElements;
      },(error) =>{
        this.searchOk = false;
    });
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
      .getProductByCategoryIdPaginate(
        this.pageNumber - 1,
        this.pageSize,
        this.currentCategoryId
      )
      .subscribe((data) => {
        (this.products = data._embedded.products),
          (this.pageNumber = data.page.number + 1),
          (this.pageSize = data.page.size);
        this.totalElement = data.page.totalElements;
      },(error) =>{
        this.searchOk = false;
    });
    //end search by product-categoryId
  }

  getProductList() {
    //send all product in view page

    this.productSerive
      .getProductList(this.pageNumber - 1, this.pageSize)
      .subscribe((data) => {
        (this.products = data._embedded.products),
          (this.pageNumber = data.page.number + 1),
          (this.pageSize = data.page.size);
        this.totalElement = data.page.totalElements;
      },(error) =>{
          this.searchOk = false;
      }
      );
    // end get all product
  }

  //pagination tag selected
  selectedPagination(SelectedPagination :string){
      this.pageSize = +SelectedPagination;
      this.pageNumber = 1;
      this.getProductList();

  }
  //end pagination tag selected

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
