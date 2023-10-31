import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-detail-mobile',
  templateUrl: './cart-detail-mobile.component.html',
  styleUrls: ['./cart-detail-mobile.component.css','../cart-detail/cart-detail.component.css']
})
export class CartDetailMobileComponent {

  @Input()  cartItems: CartItem[];
  @Input() totalPrice: number;
  @Input() totalQuantity:number;

  constructor(private cartService:CartService){}
  increase(cartItem : CartItem){
    this.cartService.addToCart(cartItem);
  }
  decreases(cartItem: CartItem){
    this.cartService.decreaseCart(cartItem);

  }

}
