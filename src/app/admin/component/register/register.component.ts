import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
    }

  ngOnInit(): void {
  }
  crearCuenta(event: Event) {
    event.preventDefault(); // Buena practica para manejar los eventos
    if (this.form.valid) {
      const create = this.form.value;
      console.log(create);
      }
    }
  private buildForm() {
    this.form = this.formBuilder.group({
      user: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  get userField() {
    return this.form.get('user');
  }
  get passField() {
    return this.form.get('password');
  }
  get emailField() {
    return this.form.get('email');
  }
}
