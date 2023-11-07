import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  //initial page
  checkoutFormGroup: FormGroup; //form
  isBillingAddress: boolean = false; //checkbox
  isNotEmailEqual: boolean = false; //check confirm email
  //-------
  //card section

  cardSecutityYear: number[] = [];
  cardSecutityMonth: number[] = [];
  //------
  //end page
  totalPrice: number = 0; //total price order
  totalQuantity: number = 0; // total quantity order
  //------

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private checkoutService: CheckoutService
  ) {}

  //service for total price and quantity
  checkoutPriceAndQuantity() {
    this.cartService.totalPrice.subscribe((data) => (this.totalPrice = data));
    this.cartService.totalQuantity.subscribe(
      (data) => (this.totalQuantity = data)
    );
  }

  //checkbox for billing and shipping address
  billingAddress(event) {
    if (!event.target.checked) {
      this.checkoutFormGroup.controls['billingAddress'].reset();
    }
    this.isBillingAddress = !this.isBillingAddress;
  }

  //initialization checkout form
  checkoutForm() {
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: [''],
        confirmEmail: [''],
      }),
      shippingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        postalCode: [''],
      }),
      billingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        postalCode: [''],
      }),
      creditCard: this.formBuilder.group({
        cardType: [''],
        cardName: [''],
        cardNumber: [''],
        cardSecutityCode: [''],
        cardSecutityMonth: [''],
        cardSecutityYear: [''],
      }),
    });
    //-------
    this.getMonthsAndYears()
  }
  yearChange(event:any){
    let startMonth:number ;
    const currentYear:number = new Date().getFullYear();
    if(+event.target.value !== currentYear){
      startMonth = 1
    }else{
      startMonth = new Date().getMonth() + 1 ;
    }
    this.checkoutService.getMonths(startMonth).subscribe(data => this.cardSecutityMonth = data);
  }
  getMonthsAndYears(){
   //get years and months
   const startMonth = new Date().getMonth() + 1 ;
  const  currentYear:number = new Date().getFullYear();
   this.checkoutService.getMonths(startMonth).subscribe(data => this.cardSecutityMonth = data);
   this.checkoutService.getYears(currentYear).subscribe(data => this.cardSecutityYear = data);
   //------
  }
  //submit
  onSubmit() {
    //control confirm Email is ok
    if (
      this.checkoutFormGroup.get('customer').get('confirmEmail').value !==
      this.checkoutFormGroup.get('customer').get('email').value
    ) {
      this.isNotEmailEqual = true;
    } else {
      this.isNotEmailEqual = false;
    }
    //end control
    //checkbox, control checkbox status true or false, and send currectly data
    if (!this.isBillingAddress) {
      this.checkoutFormGroup.controls['billingAddress'].setValue(
        this.checkoutFormGroup.controls['shippingAddress'].value
      );
    }

    console.log(this.checkoutFormGroup.get('shippingAddress').value);
    console.log(this.checkoutFormGroup.get('billingAddress').value);
  }

  ngOnInit(): void {
    this.checkoutForm();
    this.checkoutPriceAndQuantity();
  }
}
