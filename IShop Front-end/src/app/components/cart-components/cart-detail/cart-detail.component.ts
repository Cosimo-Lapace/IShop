import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css','../../product-components/product-list/product-list.component.css']
})
export class CartDetailComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity:number = 0;


  constructor(private cartService:CartService){}

  listCartDetail(){
    this.cartItems = this.cartService.cartItems;
    this.cartService.totalPrice.subscribe(data => this.totalPrice = data);
    this.cartService.totalQuantity.subscribe(data => this.totalQuantity = data);

    this.cartService.cartTotals()


  }
  increase(cartItem : CartItem){
    this.cartService.addToCart(cartItem);
  }
  decreases(cartItem: CartItem){
    this.cartService.decreaseCart(cartItem);

  }
  remove(cartItem:CartItem){
    this.cartService.removeCart(cartItem);
  }
  removeAllCart(){
    this.cartService.removeAllCart();
  }
  ngOnInit(): void {
    this.listCartDetail()
  }

}
