import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Country } from 'src/app/model/country';
import { Order } from 'src/app/model/order';
import { OrderItem } from 'src/app/model/order-item';
import { State } from 'src/app/model/state';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { CountriesService } from 'src/app/services/countries.service';
import { CreditCardService } from 'src/app/services/credit-card.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  //initial page
  checkoutFormGroup: FormGroup; //form
  isBillingAddress: boolean = false; //checkbox
  //-------
  //Shipping Address section
  countries: Country[] = [];
  shippingAddressStates: State[] = [];
  billingAddressStates: State[] = [];
  //end Shipping Address section
  //card section
  cardSecutityYear: number[] = [];
  cardSecutityMonth: number[] = [];
  @ViewChild('cardType') cardType:ElementRef;
  cardTypeImg:string;
  isCardTypeImg:boolean = false;
  //------
  //end page
  totalPrice: number = 0; //total price order
  totalQuantity: number = 0; // total quantity order
  //------

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private countriesService: CountriesService,
    private creditCardService:CreditCardService,
    private router:Router
  ) {}

  //service for total price and quantity
  checkoutPriceAndQuantity() {
    this.cartService.totalPrice.subscribe((data) => (this.totalPrice = data));
    this.cartService.totalQuantity.subscribe(
      (data) => (this.totalQuantity = data)
    );
  }
  //-----------------
  //checkbox for billing and shipping address
  billingAddress(event) {
    if (!event.target.checked) {
      this.checkoutFormGroup.controls['billingAddress'].reset();
    }
    this.isBillingAddress = !this.isBillingAddress;
  }

  getCountriesAndStates() {
    this.countriesService
      .getCountries()
      .subscribe((data) => (this.countries = data));
  }

  getStates(formGroupName: string) {
    const formGroup = this.checkoutFormGroup.get(formGroupName);
    const countryCode = formGroup.value.country.code;

    this.countriesService.getStates(countryCode).subscribe((data) => {
      if (formGroupName === 'shippingAddress') {
        this.shippingAddressStates = data;
      } else {
        this.billingAddressStates = data;
      }
    });
  }

  //----------
  getMonthsAndYears() {
    //get years and months
    const startMonth = new Date().getMonth() + 1;
    const currentYear: number = new Date().getFullYear();
    this.checkoutService
      .getMonths(startMonth)
      .subscribe((data) => (this.cardSecutityMonth = data));
    this.checkoutService
      .getYears(currentYear)
      .subscribe((data) => (this.cardSecutityYear = data));
    //------
  }
  yearChange(event: any) {
    let startMonth: number;
    const currentYear: number = new Date().getFullYear();
    if (+event.target.value !== currentYear) {
      startMonth = 1;
    } else {
      startMonth = new Date().getMonth() + 1;
    }
    this.checkoutService
      .getMonths(startMonth)
      .subscribe((data) => (this.cardSecutityMonth = data));
  }
  cardNumber(event){
    let cardInputNumber = event.target.value
   let cardType = this.creditCardService.detectCreditCardType(cardInputNumber)
   switch (cardType){
    case "Visa":
      this.cardTypeImg = "../../../assets/images/cardType/Visa_Inc._logo.svg.png"
      this.isCardTypeImg = true;
      break;
      case "MasterCard":
        this.cardTypeImg = "../../../assets/images/cardType/MasterCard-Logo-1990.png"
        this.isCardTypeImg = true;
        break;
        case "American Express":
        this.cardTypeImg = "../../../assets/images/cardType/png-transparent-amex-card-credit-logo-logos-logos-and-brands-icon.png"
        this.isCardTypeImg = true;
        break;
      default:
        this.cardTypeImg = ""
        this.isCardTypeImg = false;
   }
    this.cardType.nativeElement.value = cardType
  }


  checkoutForm() {
    this.checkoutFormGroup = this.checkoutService.checkoutForm();
    //countries and states
    this.getCountriesAndStates();
    //end countries and states
    //-------
    //credit month and year
    this.getMonthsAndYears();
    //end credit month and year

  }

// control email are equals

//----------------------
  //getter formControl customer

  get firstName() {
    return this.checkoutFormGroup.get('customer.firstName');
  }
  get lastName() {
    return this.checkoutFormGroup.get('customer.lastName');
  }

  get email() {
    return this.checkoutFormGroup.get('customer.email');
  }
  get confirmEmail(){
    return this.checkoutFormGroup.get('customer.confirmEmail');
  }
  //getter formControl Shipping and billing Address

  get shippingAddressStreet(){
    return this.checkoutFormGroup.get('shippingAddress.street');
  }
  get shippingAddressCity(){
    return this.checkoutFormGroup.get('shippingAddress.city');
  }
  get shippingAddressCountry(){
    return this.checkoutFormGroup.get('shippingAddress.country');
  }
  get shippingAddressState(){
    return this.checkoutFormGroup.get('shippingAddress.state');
  }
  get shippingAddressPostalCode(){
    return this.checkoutFormGroup.get('shippingAddress.postalCode');
  }

  get billingAddressStreet(){
    return this.checkoutFormGroup.get('billingAddress.street');
  }
  get billingAddressCity(){
    return this.checkoutFormGroup.get('billingAddress.city');
  }
  get billingAddressCountry(){
    return this.checkoutFormGroup.get('billingAddress.country');
  }
  get billingAddressState(){
    return this.checkoutFormGroup.get('billingAddress.state');
  }
  get billingAddressPostalCode(){
    return this.checkoutFormGroup.get('billingAddress.postalCode');
  }

  get creditCardType(){
    return this.checkoutFormGroup.get('creditCard.cardType')
  }
  get creditCardName(){
    return this.checkoutFormGroup.get('creditCard.cardName')
  }

  get creditCardNumber(){
    return this.checkoutFormGroup.get('creditCard.cardNumber')
  }

  get creditCardSecutityCode(){
    return this.checkoutFormGroup.get('creditCard.cardSecutityCode')
  }








//---------------------------
  //submit
  onSubmit(event) {

    //checkbox, control checkbox status true or false, and send currectly data
    if (!this.isBillingAddress) {
      this.checkoutFormGroup.controls['billingAddress'].setValue(
        this.checkoutFormGroup.controls['shippingAddress'].value
      );
    }

    //last check email and confirmation email
    if(this.checkoutFormGroup.get('customer').get('email').value !== this.checkoutFormGroup.get('customer').get('confirmEmail').value
      ||this.checkoutFormGroup.get('customer').get('confirmEmail').value.trim() === ''
    ){
      this.checkoutFormGroup.get('customer').get('confirmEmail').setErrors({ 'misConfirmEmail': true });
      return;
    }else{
      this.checkoutFormGroup.get('customer').get('confirmEmail').setErrors(null);
    }
    //-------------
     if(this.checkoutFormGroup.invalid){
      this.checkoutFormGroup.markAllAsTouched()
      return;
    }


    //istance new order
    let order = new Order();
    //take total price and total quantity
    order.totalPrice = this.totalPrice;
    order.totalQuantity = this.totalQuantity;

    //take items in the cart
    const cartItems = this.cartService.cartItems;

    //remapping cart items in order
    let orderItems:OrderItem[] = cartItems.map(item => new OrderItem(item));


    const billingcountry:Country = this.checkoutFormGroup.get("billingAddress").get("country").value
    const shippingcountry:Country = this.checkoutFormGroup.get("shippingAddress").get("country").value
    const postData = {
      customer: {
        firstName: this.checkoutFormGroup.get("customer").get("firstName").value,
        lastName: this.checkoutFormGroup.get("customer").get("lastName").value,
        email: this.checkoutFormGroup.get("customer").get("email").value
      },
      shippingAddress: {
        street: this.checkoutFormGroup.get("shippingAddress").get("street").value,
        city: this.checkoutFormGroup.get("shippingAddress").get("city").value,
        state: this.checkoutFormGroup.get("shippingAddress").get("state").value,
        country: shippingcountry.name,
        zipCode: this.checkoutFormGroup.get("shippingAddress").get("postalCode").value
      },
      billingAddress: {
        street: this.checkoutFormGroup.get("billingAddress").get("street").value,
        city: this.checkoutFormGroup.get("billingAddress").get("city").value,
        state: this.checkoutFormGroup.get("billingAddress").get("state").value,
        country: billingcountry.name,
        zipCode: this.checkoutFormGroup.get("billingAddress").get("postalCode").value
      },
      order: order,
      orderItems: orderItems
    };
    this.checkoutService.placeOrder(postData).subscribe(
      {
        next: response =>{
          alert("Your order has been received " + response.orderTrackingNumber);
          this.resetCart();
        },
        error: err =>{
          alert("error" + err.message)
        }
      }
    );














  }

  resetCart(){
    //clean cart
    this.cartService.cartItems = [];
    this.cartService.totalPrice.next(0);
    this.cartService.totalQuantity.next(0);
    //clean form
    this.checkoutFormGroup.reset();
    //back navigate
    this.router.navigateByUrl("");

  }
  ngOnInit(): void {
    this.checkoutForm();
    this.checkoutPriceAndQuantity();
  }
}
