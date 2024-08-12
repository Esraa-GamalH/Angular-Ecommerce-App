import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsRequestsService {
  constructor(private http: HttpClient) {}

  getProductsList() {
    return this.http.get('https://dummyjson.com/products');
  }

  getProductDetails(id : number){
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
