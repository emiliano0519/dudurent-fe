import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: any;

  constructor(
    public formBuilder: FormBuilder,
  ) {
  }

  loginForm = this.formBuilder.group({
    fiscalCode: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  clickLogin() {
    // Handle login logic here
    console.log('Login clicked', this.username);
  }
}
