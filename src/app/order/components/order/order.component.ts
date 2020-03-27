import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/services/product.model';
import { CartService } from '../../../core/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  product$: Observable<Product[]>; // Se crea un array de productos en vacio | Observable
  constructor(
    private cartService: CartService
  ) {
    this.product$ = this.cartService.cart$; // Aca tenemos los productos asignados
  }

  ngOnInit(): void {
  }

}
