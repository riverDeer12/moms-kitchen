import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class AdminInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.authService.checkLoggedUser()) {
      const clonedRequest = request.clone({
        headers: request.headers.set(
          'Authorization',
          'Bearer ' + localStorage.getItem('token')
        ),
      });

      return next.handle(clonedRequest).pipe(
        tap(
          (success) => {},
          (error) => {
            if (error.status === 401) {
              this.authService.logOut();
              this.router.navigateByUrl('/login');
            }
          }
        )
      );
    } else {
      return next.handle(request.clone());
    }
  }
}
