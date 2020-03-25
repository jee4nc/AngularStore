import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/products/componentes/product-card/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient
  ) { }
  getAllProducts() {
    return this.http.get<Product[]>('http://platzi-store.herokuapp.com/products/'); // Agregar []
  }
  getProduct(id: string) {
    return this.http.get(`http://platzi-store.herokuapp.com/products/${id}`);
  }
}
