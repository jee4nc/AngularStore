import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService} from './../products.service'; // se importa el servicio
import {Product} from './../product/product.model'; // se importa la interfaz

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
      this.product = this.productsService.getProduct(id);
    });
  }

}
