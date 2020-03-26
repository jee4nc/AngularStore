import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms'; // Esto me permite ocupar el control

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField: FormControl; // Se tipa la variable

  constructor() {
    this.emailField = new FormControl('',
    [// Validators.minLength(4),
    // Validators.maxLength(20),
    Validators.email,
    Validators.required
    ]); // Se crea y se instancia en footer.html
    // this.emailField.valueChanges
    // .subscribe(value => {
    //   console.log(value);
    // });
  }

  ngOnInit(): void {
  }
  sendEMail() {
    if (this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }
}
