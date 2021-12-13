import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../../dtos/auth/login-request';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { AuthToken } from 'app/core/dtos/auth/auth-token';
import jwtDecode from 'jwt-decode';

@Injectable()
export class AuthService {
  authUrl = environment.apiUrl + '/auth/';

  constructor(private http: HttpClient) {}

  login(request: LoginRequest): Observable<object> {
    return this.http.post(this.authUrl + 'login', request);
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

    return decodedToken.exp >= now;
  }
}
