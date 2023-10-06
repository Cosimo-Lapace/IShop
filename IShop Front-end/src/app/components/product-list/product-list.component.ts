import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css', '../header/header.component.css'],
})
export class ProductListComponent
  implements OnInit, AfterViewChecked, OnDestroy
{
  products: Product[] = [];
  private ProductsSubscription: Subscription;

  constructor(private productSerive: ProductService) {}

  ngOnInit(): void {
    this.ProductsSubscription = this.productSerive
      .getProductList()
      .subscribe((data) => {
        this.products = data;
      });
  }

  ngAfterViewChecked(): void {
    let description = document.querySelectorAll('.description');
    let name = document.querySelectorAll('.name');

    console.log(description);
    description.forEach((el, i) => {
      if (el.innerHTML.length > 101) {
        let text = el.innerHTML.slice(0, 101 - 3) + '...';
        console.log(text);
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
    this.ProductsSubscription.unsubscribe();
  }
}
