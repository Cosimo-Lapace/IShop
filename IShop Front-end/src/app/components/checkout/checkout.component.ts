import {  Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css',]
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup:FormGroup;
  isBillingAddress:boolean = false;
  isNotEmailEqual:boolean = false;

  constructor(private formBuilder:FormBuilder){}

  checkedShippingAndBillingAddress(){

  }

  billingAddress(event){

    if(!event.target.checked){
      this.checkoutFormGroup.controls['billingAddress'].reset()
    }
    this.isBillingAddress = !this.isBillingAddress;
  }

  checkoutForm(){
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName:[''],
        lastName:[''],
        email:[''],
        confirmEmail:[''],
      }),
      shippingAddress: this.formBuilder.group({
        street:[''],
        city:[''],
        state:[''],
        postalCode:[''],
      }),
      billingAddress: this.formBuilder.group({
        street:[''],
        city:[''],
        state:[''],
        postalCode:[''],
      }),
      creditCard: this.formBuilder.group({
        cardType:[''],
        cardName:[''],
        cardNumber:[''],
        cardSecutityCode:[''],
        cardSecutityMonth:[''],
        cardSecutityYear:[''],
      }),
    })
  }
  onSubmit(){
    if(this.checkoutFormGroup.get('customer').get('confirmEmail').value !== this.checkoutFormGroup.get('customer').get('email').value){
      this.isNotEmailEqual = true;
    }else{
      this.isNotEmailEqual = false;
    }
    if(!this.isBillingAddress){
      this.checkoutFormGroup.controls['billingAddress'].setValue(this.checkoutFormGroup.controls['shippingAddress'].value)
    }
    console.log(this.checkoutFormGroup.get('shippingAddress').value)
    console.log(this.checkoutFormGroup.get('billingAddress').value)
  }
  ngOnInit(): void {

    this.checkoutForm()

  }


}

