import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './validators/custom-validators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private purchaseUrl = "http://localhost:8080/api/checkout/purchase";


  constructor(private formBuilder: FormBuilder, private httpClient:HttpClient) { }
    //initialization checkout form validators
  checkoutForm(){
    return this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          CustomValidators.notEmptySpace
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          CustomValidators.notEmptySpace
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
        confirmEmail: new FormControl('', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),CustomValidators.emailEqualsValidator]),
      }),
      shippingAddress: this.formBuilder.group({
        street: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          CustomValidators.notEmptySpace
        ]),
        city: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          CustomValidators.notEmptySpace
        ]),
        country: new FormControl('', [
          Validators.required,
        ]),
        state: new FormControl('', [
          Validators.required,
        ]),
        postalCode: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          CustomValidators.notEmptySpace
        ]),
      }),
      billingAddress: this.formBuilder.group({
        street: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          CustomValidators.notEmptySpace
        ]),
        city: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          CustomValidators.notEmptySpace
        ]),
        country: new FormControl('', [
          Validators.required,
        ]),
        state: new FormControl('', [
          Validators.required,
        ]),
        postalCode: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          CustomValidators.notEmptySpace
        ]),
      }),
      creditCard: this.formBuilder.group({
        cardType: new FormControl('', [
          Validators.required,
        ]),
        cardName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          CustomValidators.notEmptySpace
        ]),
        cardNumber: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]*$')
        ]),
        cardSecutityCode: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]{3,4}$')
        ]),
        cardSecutityMonth: [''],
        cardSecutityYear: [''],
      }),
    });
  }




  //get automatic current year + 10
  getYears(currentYear:number) :Observable<number[]>{
    let data: number[] = [];
    const endYear:number = currentYear + 10;

    for(let year = currentYear; year <=endYear ; year ++){
      data.push(year);
    }
    return of(data);

  }

  //get automatic month
  getMonths(StarterMonth:number):Observable<number[]>{

    let data:number[] = [];

    for(let month = StarterMonth; month <= 12; month++){
      data.push(month);
    }

    return of(data);


  }

    placeOrder(purchase:any):Observable<any>{
      return this.httpClient.post<any>(this.purchaseUrl,purchase);
    }





}
