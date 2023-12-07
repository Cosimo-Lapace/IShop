import { Component, OnDestroy, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-checkout-success',
  templateUrl: './checkout-success.component.html',
  styleUrls: ['./checkout-success.component.css']
})
export class CheckoutSuccessComponent implements OnInit,OnDestroy {
  orderTrackingInViewPage:string;

  constructor(private route : ActivatedRoute,private checkoutService:CheckoutService){}
ngOnInit(): void {
 this.orderTrackingInViewPage = this.route.snapshot.paramMap.get("orderTrackingNumber");
}
ngOnDestroy(): void {
    this.checkoutService.isCheckoutSuccessFalse();
}
}
