import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Esto es necesario
import { ProductsService } from './../../../core/services/products.service';
import { Router } from '@angular/router';
import { MyValidators} from '../../../utils/validators';

import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
     this.buildForm(); // lo inicializamos
  }

  ngOnInit(): void {
  }

  saveProduct(event: Event) {
    event.preventDefault(); // Buena practica para manejar los eventos
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.createProduct(product)
      .subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    }
    console.log(this.form.value);
  }
  uploadFile(event) {
    const file = event.target.files[0];
    console.log(file);
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]], // Agrego mi validacion aca
      image: '',
      description: ['', [Validators.required]]
    });
  }
  get priceField() {
    return this.form.get('price');
  }
}
