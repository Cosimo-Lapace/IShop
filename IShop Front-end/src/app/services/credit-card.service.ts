import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor() { }






  detectCreditCardType(cardNumber:string) :string {
    // Rimuovi spazi e caratteri non numerici
    let cleanedNumber = cardNumber.trim();
    if (/^\d+[a-zA-Z]+$/.test(cleanedNumber)) {
      return "";
    }else{
      if (cleanedNumber.startsWith('4')) {
        if(cleanedNumber.length > 16 && !/^4[0-9]{12}(?:[0-9]{3})?$/.test(cleanedNumber)){

          return "";
        }
        else{
          return 'Visa';
        }
      } else if (cleanedNumber.startsWith('5') || cleanedNumber.startsWith('5') && cleanedNumber.length === 16 && parseInt(cleanedNumber[1]) <= 5) {
        if(cleanedNumber.length > 16 && parseInt(cleanedNumber[1]) !<= 5 && !/^5[1-5][0-9]{14}$/.test(cardNumber)){
          return "";
        }else{
          return 'MasterCard';
        }
      }
      else if ((cardNumber.startsWith('34') || cardNumber.startsWith('37')) ){
        if(cardNumber.length > 15  && !/^3[47][0-9]{13}$/.test(cleanedNumber)){
          return "";
        }else{
          return 'American Express';
        }
      }else{
        return '';
      }
    }
    }
  }




