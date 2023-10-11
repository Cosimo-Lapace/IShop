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

  constructor(
    private productSerive: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  getRouteParamsById() {
    // check id exist
    const isCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    console.log(isCategoryId);
    if (isCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
      console.log(this.currentCategoryId);
    } else {
      this.currentCategoryId = 1;
    }
    this.productSerive.getProductByCategoryId(this.currentCategoryId).subscribe(data => this.products = data);


  }
  getProductList() {
     this.productSerive
      .getProductList()
      .subscribe((data) => {
        this.products = data;
      });
  }


  //lifecycle
  ngOnInit(): void {
   this.route.paramMap.subscribe(()=>{
    if(!this.route.snapshot.paramMap.has('id') || +this.route.snapshot.paramMap.get('id') === 0){
      this.getProductList()
    }else{
      this.getRouteParamsById();
    }

   })
  }

  ngAfterContentChecked(): void {
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

  }

  ngOnDestroy(): void {

  }

}
