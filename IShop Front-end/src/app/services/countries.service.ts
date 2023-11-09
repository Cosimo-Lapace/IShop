import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../model/country';
import { State } from '../model/state';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private countriesUrl:string="http://localhost:8080/api/countries";
  private statesUrl:string = "http://localhost:8080/api/states";


  constructor(private httpClient:HttpClient) { }

  getCountries() : Observable<Country[]>
  {
//return  countries
      return this.httpClient.get<GetResponseCountries>(this.countriesUrl)
      .pipe(map((response) => response._embedded.countries));

  }
  getStates(countryCode:string) : Observable<State[]>
  {
//return name countries
      const statesByCountryCode:string = this.statesUrl+"/search/findByCountryCode?code="+countryCode;
      return this.httpClient.get<GetResponseStates>(statesByCountryCode)
      .pipe(map((response) => response._embedded.states));

  }




}

interface GetResponseCountries {
  _embedded: {
    countries: Country[];
  },
}
interface GetResponseStates {
  _embedded: {
    states: State[];
  },
}
