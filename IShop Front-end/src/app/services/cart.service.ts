import { Injectable } from '@angular/core';
import { CartItem } from '../model/cart-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() {}
  checkQuantity(cartItem:CartItem){
    let cartError : boolean = false
    if(cartItem.quantity === 0){
      cartItem.quantity = 1;
      cartError = true;
    }else{
      cartError = false;
    }
    cartItem.cartQuantityError = cartError;
  }

  longCartData(totalPriceValue: number, totalQuantityValue: number) {
    for (let cartIte of this.cartItems) {
      const subTotalPrice = cartIte.quantity * cartIte.unitPrice;
      console.log(
        'name ' +
          cartIte.name +
          ' quantity ' +
          cartIte.quantity +
          ' price ' +
          'price' +
          cartIte.unitPrice +
          ' total ' +
          subTotalPrice
      );
    }
    console.log("total price " + totalPriceValue.toFixed(2) + " total quantity " + totalQuantityValue);
    console.log("----------------------------------------------------------")
  }

  //calcolate cart total price and total quantity
  cartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;
    //cycle items
    for (let cartIte of this.cartItems) {
      //total price =  item quantity in the cart x price
      totalPriceValue += cartIte.quantity * cartIte.unitPrice;
      //total quantity = sum item quantity
      totalQuantityValue += cartIte.quantity;
    }
    //send in my component
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    this.longCartData(totalPriceValue, totalQuantityValue);
  }

  addToCart(cartItem: CartItem) {
    //control item Exists
    let ItemExists: boolean = false;
    //variable for check item
    let existingCartItem: CartItem = undefined;
    //if cart contain items
    if (this.cartItems.length > 0) {
      //check if item exists in the cart
      existingCartItem = this.cartItems.find(cartIte => cartIte.id === cartItem.id)
      //check if variable passed check in line 23 - 32
      ItemExists = (existingCartItem != undefined);
    }
    //final if, add quantity in the cart if item is present
    if (ItemExists) {
      existingCartItem.quantity++;

    }
    //else is not present
    else {
      this.cartItems.push(cartItem);
    }

  this.checkQuantity(cartItem)
    //check total cart
    this.cartTotals();
  }

  decreaseCart(cartItem:CartItem){
    cartItem.quantity -= 1;
    this.checkQuantity(cartItem)
    this.cartTotals();
  }
}
