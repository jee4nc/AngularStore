import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../core/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = []; // Creamos un array vacio
  displayedColumns: string[] = ['id', 'titulo', 'price', 'actions'];
  constructor(
    private productsServices: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }
  fetchProducts() {
    this.productsServices.getAllProducts()
    .subscribe( products => {
      this.products = products;
    });
  }
  deleteProduct(id: string) {
    this.productsServices.deleteProduct(id)
    .subscribe( () => {
      this.fetchProducts();
    });
  }
}
