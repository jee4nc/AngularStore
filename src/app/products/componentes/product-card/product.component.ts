import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product[] = [];
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }
  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe( product => {
      this.product = product;
    } );
  }
}
