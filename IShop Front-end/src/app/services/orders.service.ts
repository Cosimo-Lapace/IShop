import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private baseUrlOrders= "http://localhost:8080/api/orders/getAllOrders";


  constructor(private httpClient:HttpClient) { }

  getOrders(page:number,pageSize:number) :Observable<GetResponseOrders>{
    return this.httpClient.get<GetResponseOrders>(`${this.baseUrlOrders}?page=${page}&size=${pageSize}`)
  }


}

interface GetResponseOrders{
  content:Order[];

    size:number,
    number : number,
    totalElements:number,



}

