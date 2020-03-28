import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
    }

  ngOnInit(): void {
  }
  iniciarSesion(event: Event) {
    event.preventDefault(); // Buena practica para manejar los eventos
    if (this.form.valid) {
      const loger = this.form.value;
      this.authService.login(loger.email, loger.password)
      .then(() =>{
        this.router.navigate(['/admin']);
      })
      .catch(() => {
        alert('No es valido');
      });
      }
    }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]]
    });
  }
  get emailField() {
    return this.form.get('email');
  }
  get passField() {
    return this.form.get('password');
  }
}
