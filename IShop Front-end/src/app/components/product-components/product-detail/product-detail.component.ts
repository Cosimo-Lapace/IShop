import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

    product? : Product ;

  constructor(private productService:ProductService,private route:ActivatedRoute){}

    getSingleProduct(){
      let id: number = +this.route.snapshot.paramMap.get('id');
      this.productService.getProductById(id).subscribe(data =>{
        this.product = data;
      })
    }

  ngOnInit(): void {
      this.route.paramMap.subscribe(()=>{
            this.getSingleProduct()
      })
  }


}
