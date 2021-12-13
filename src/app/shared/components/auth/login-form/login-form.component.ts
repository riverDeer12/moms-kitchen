import { AuthService } from '../../../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  loadingData: boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: AuthService
  ) {
    this.setLoginForm();
  }

  setLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false)
    });
  }

  ngOnInit() {}

  login(): void {
    if (!this.loginForm.valid) {
      return;
    }

    this.loadingData = true;

    this.service.login(this.loginForm.value).subscribe((response: any) => {
      localStorage.setItem('token', response.token);
      this.router.navigateByUrl('/admin/dashboard');
      this.loadingData = false;
    });
  }
}
