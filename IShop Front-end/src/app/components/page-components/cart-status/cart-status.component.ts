import { Component, DoCheck, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit,DoCheck {

  totalPrice:number = 0.00;
  totalQuantity:number = 0;

  constructor(private cartService : CartService){}
  ngDoCheck(): void {
    /* this.totalPrice = +localStorage.getItem("totalPrice")
    this.totalQuantity = +localStorage.getItem("totalQuantity") */
  }

  updateCartStatus(){
    this.cartService.totalPrice.subscribe(data =>{
/*       localStorage.setItem("totalPrice",data.toString()) */
      this.totalPrice = data;

    } );
    this.cartService.totalQuantity.subscribe(data => {
    /*   localStorage.setItem("totalQuantity",data.toString()) */
      this.totalQuantity = data;
    });

  }



  ngOnInit(): void {
   this.updateCartStatus();
  }


}
