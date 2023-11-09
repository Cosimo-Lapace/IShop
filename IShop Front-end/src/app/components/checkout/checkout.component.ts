import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Country } from 'src/app/model/country';
import { State } from 'src/app/model/state';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { CountriesService } from 'src/app/services/countries.service';

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
  //------
  //end page
  totalPrice: number = 0; //total price order
  totalQuantity: number = 0; // total quantity order
  //------

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private countriesService: CountriesService
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
  //initialization checkout form
  checkoutForm() {
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
        confirmEmail: new FormControl('', [Validators.required,this.emailEqualsValidator()]),
      }),
      shippingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        country: [''],
        state: [''],
        postalCode: [''],
      }),
      billingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        country: [''],
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
    //countries and states
    this.getCountriesAndStates();
    //end countries and states
    //-------
    //credit month and year
    this.getMonthsAndYears();
    //end credit month and year
  }

// control email are equals
emailEqualsValidator(): ValidatorFn {
  //custom validator for group form parent
  return (control: AbstractControl): { [key: string]: any } | null => {
    const customerGroup = control.parent;
    //check group parent exsist
    if (customerGroup) {
      //get email and confirm email
      const email = customerGroup.get('email').value;
      const confirmEmail = control.value;
      //check email and confirm email is equals
      return email === confirmEmail ? null : { 'emailMismatch': true };
    }

    return null;
  };
}
//----------------------
  //getter formControl

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
//---------------------------
  //submit
  onSubmit() {
    //checkbox, control checkbox status true or false, and send currectly data
    if (!this.isBillingAddress) {
      this.checkoutFormGroup.controls['billingAddress'].setValue(
        this.checkoutFormGroup.controls['shippingAddress'].value
      );
    }
    if(this.checkoutFormGroup.invalid){
      this.checkoutFormGroup.markAllAsTouched()
    }

    console.log(this.checkoutFormGroup.get('shippingAddress').value);
    console.log(this.checkoutFormGroup.get('billingAddress').value);
  }

  ngOnInit(): void {
    this.checkoutForm();
    this.checkoutPriceAndQuantity();
  }
}
