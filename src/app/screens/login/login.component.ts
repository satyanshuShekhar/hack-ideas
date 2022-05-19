import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initLoginForm();
  }

  ngOnInit(): void {}

  /**
   * Initialise the login form.
   */
  private initLoginForm() {
    this.loginForm = this.formBuilder.group({
      employeeId: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
      rememberMe: new FormControl(false),
    });
  }

  login() {
    if (this.loginForm.invalid) {
      console.log('Form Invalid');
    } else {
      console.log('Login success');
    }
  }
}
