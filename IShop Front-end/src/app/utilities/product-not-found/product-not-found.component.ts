import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-not-found',
  templateUrl: './product-not-found.component.html',
  styleUrls: ['./product-not-found.component.css']
})
export class ProductNotFoundComponent implements OnInit {

 @Input() products:Product[];
isNotFound:boolean;
  ngOnInit(): void {
      setInterval(()=>{
        this.isNotFound= true;
      },500)
  }
}
