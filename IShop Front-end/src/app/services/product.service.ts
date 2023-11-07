import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrlApi = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) {}



  getProductByCategoryIdPaginate(page : number,pageSize:number, id:number): Observable<GetResponse> {
    return this.httpClient
      .get<GetResponse>(`${this.baseUrlApi}/search/findByCategoryId?id=${id}&page=${page}&size=${pageSize}`)

  }

  getProductList(page:number,pageSize:number): Observable<GetResponse> {
    return this.httpClient
      .get<GetResponse>(`${this.baseUrlApi}?page=${page}&size=${pageSize}`)

  }

  getProductByCategoryId(id: number): Observable<Product[]> {
    return this.httpClient
      .get<GetResponse>(`${this.baseUrlApi}/search/findByCategoryId?id=${id}`)
      .pipe(map((response) => response._embedded.products))
  }
  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseUrlApi}/${id}`);
  }
  searchProductByName(page : number,pageSize:number,searchInput: string): Observable<GetResponse> {
    return this.httpClient
      .get<GetResponse>(
        `${this.baseUrlApi}/search/findByNameContaining?name=${searchInput}&page=${page}&size=${pageSize}`
      )

  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  },
  page:{
    size:number,
    totalElements:number,
    totalPages : number,
    number : number,
  };

}
