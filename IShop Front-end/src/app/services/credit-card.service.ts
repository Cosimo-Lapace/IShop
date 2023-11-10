import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor() { }

  detectCreditCardType(cardNumber:string) :string {
    // Rimuovi spazi e caratteri non numerici
    let cleanedNumber = cardNumber.replace(/\D/g, '');
    console.log(cardNumber)
    // Verifica il tipo di carta
    if (cleanedNumber.startsWith('4') || cleanedNumber.startsWith('4') && (cleanedNumber.length === 13 || cleanedNumber.length === 16)) {
      return 'Visa';
    } else if (cleanedNumber.startsWith('5') || cleanedNumber.startsWith('5') && cleanedNumber.length === 16 && parseInt(cleanedNumber[1]) <= 5) {
      return 'MasterCard';
    }else if ((cardNumber.startsWith('34') || cardNumber.startsWith('37')) ||(cardNumber.startsWith('34') || cardNumber.startsWith('37')) && cardNumber.length === 15){
      return 'American Express';
    }
     else {
      return 'Sconosciuto';
    }
  }

  }




