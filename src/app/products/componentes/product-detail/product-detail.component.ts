import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ChildActivationStart } from '@angular/router';
import { ProductsService} from './../../../core/services/products.service'; // se importa el servicio
import {Product} from './../../../products/componentes/product-card/product.model'; // se importa la interfaz

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product; // inicio una variable publica como product y lo hago de tipo interfaz prod

  constructor(
    private route: ActivatedRoute, // agrego los parametros de las import de route
    private productsService: ProductsService // ambos son necesarios
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);
    });
  }
  fetchProduct(id: string) {
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });
  }
  crearProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular',
      image: 'assets/banner-2.jpg',
      price: 3000,
      description: 'nuevo productillo'
    };
    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    });
  }
}
