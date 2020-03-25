import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/products/componentes/product-card/product.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient
  ) { }
  getAllProducts() {
    return this.http.get<Product[]>(`${environment.API_URL}/products/`); // Agregar []
  }
  getProduct(id: string) {
    return this.http.get<Product>(`${environment.API_URL}/products/${id}`);
  }
}
