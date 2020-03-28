import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Esto es necesario
import { ProductsService } from './../../../core/services/products.service';
import { Router } from '@angular/router';
import { MyValidators} from '../../../utils/validators';

import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;

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
    const name = 'images';
    const fileRef = this.storage.ref(name);
    const task  = this.storage.upload(name, file);
    task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          this.form.get('image').setValue(url);
        });
      }) // Esto es para subir el archivo
    )
    .subscribe();
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
