import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/model/cart-item';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

    product? : Product ;

  constructor(private productService:ProductService,private cartService: CartService,private route:ActivatedRoute){}

    getSingleProduct(){
      let id: number = +this.route.snapshot.paramMap.get('id');
      this.productService.getProductById(id).subscribe(data =>{
        this.product = data;
      })
    }

    addToCart(){
        const cartIte = new CartItem(this.product);
        this.cartService.addToCart(cartIte);
    }

  ngOnInit(): void {
      this.route.paramMap.subscribe(()=>{
            this.getSingleProduct()
      })
  }


}
