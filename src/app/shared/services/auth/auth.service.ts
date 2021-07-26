import { HttpClient } from '@angular/common/http';
import { LoginRequest } from './../../dtos/auth/login-request';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'app/shared/common/api-response';
import { AuthUser } from 'app/shared/common/auth-user';
import { environment } from 'environments/environment';
import { AuthToken } from 'app/shared/dtos/auth/auth-token';
import jwtDecode from 'jwt-decode';

@Injectable()
export class AuthService {
  authUrl = environment.apiUrl + '/auth/';

  constructor(private http: HttpClient) {}

  login(request: LoginRequest): Observable<object> {
    return this.http.post(this.authUrl + 'login', request);
  }

  getAuthUser(): ApiResponse<AuthUser> {
    throw new Error('Method not implemented.');
  }

  logOut(): void {
    localStorage.removeItem('token');
  }

  checkAccess(): boolean {
    return true;
  }

  checkLoggedUser(): boolean {
    return this.validateToken() && this.checkAccess();
  }

  validateToken(): boolean {
    const token = localStorage.getItem('token');

    if (token === null) {
      return false;
    }

    return this.validateExpirationTime(token);
  }

  validateExpirationTime(token: string): boolean {
    const decodedToken = jwtDecode(token) as AuthToken;

    const now = Date.now().valueOf() / 1000;

    if (decodedToken.exp < now) {
      return false;
    }

    return true;
  }
}
