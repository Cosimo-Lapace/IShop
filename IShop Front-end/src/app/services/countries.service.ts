import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  commonNames: string[] = [];
  constructor(private httpClient:HttpClient) { }

  getCountries(){
//return name countries
      this.httpClient.get<GetResponse[]>('https://restcountries.com/v3.1/all').subscribe(data => {
        this.commonNames = data.map(item => item.name.common); 
      });
    console.log(this.commonNames)

  }
}
interface GetResponse {
  name: {
    common: string;
  },
}
