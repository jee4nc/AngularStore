import { Injectable } from '@angular/core';
import { Product } from '../../core/services/product.model'; // Se importa la interfaz de producto
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = [];
  private cart = new  BehaviorSubject<Product[]>([]); // Es un behavior de product[] y empieza con un [] vacio
  cart$ = this.cart.asObservable();
  constructor() { }
  addCart(product: Product) {
    this.products = [...this.products, product]; // Esto permite poder mutar los datos, creando un nuevo array
    this.cart.next(this.products); // Se crea un cambio de datos que va mutando
  }
}
