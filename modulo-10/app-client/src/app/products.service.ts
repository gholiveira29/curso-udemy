import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  readonly url: string = 'http://localhost:3000/'

  getProduts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}products`)
  }

  getProductsErr(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}productserr`)
  }
}
