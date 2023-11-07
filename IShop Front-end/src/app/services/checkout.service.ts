import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor() { }

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
}
