import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.setLoginForm();
  }

  setLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit() {}

  login(): void {
    this.router.navigateByUrl('/dashboard');
  }
}
