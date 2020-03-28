import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {AuthService} from './../../../core/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.buildForm();
    }

  ngOnInit(): void {
  }
  crearCuenta(event: Event) {
    event.preventDefault(); // Buena practica para manejar los eventos
    if (this.form.valid) {
      const create = this.form.value;
      this.authService.createUser(create.email, create.password)
      .then(() => {
        this.router.navigate(['/auth/login']);
      });
      }
    }
  private buildForm() {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  get passField() {
    return this.form.get('password');
  }
  get emailField() {
    return this.form.get('email');
  }
  paralogin() {
    this.router.navigate(['/auth/login']);
  }
}
