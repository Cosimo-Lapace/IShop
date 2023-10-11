import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductCategory } from '../model/product-category';

@Injectable({
  providedIn: 'root',
})
export class ProductCategoryService {
  private baseUrlApi = 'http://localhost:8080/api/product-category';

  constructor(private httpClient: HttpClient) {}

  getProductList(): Observable<ProductCategory[]> {
    return this.httpClient
      .get<GetResponse>(this.baseUrlApi)
      .pipe(map((response) => response._embedded.productCategory));
  }
}

interface GetResponse {
  _embedded: {
    productCategory: ProductCategory[];
  };
}
