import { Injectable } from '@angular/core';
import { ApiResponse } from 'app/shared/common/api-response';
import { AuthUser } from 'app/shared/common/auth-user';
import { IAuthService } from './i-auth-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService {

constructor() { }
  login(): ApiResponse<string> {
    throw new Error('Method not implemented.');
  }
  getAuthUser(): ApiResponse<AuthUser> {
    throw new Error('Method not implemented.');
  }
  logOff(): ApiResponse<string> {
    throw new Error('Method not implemented.');
  }
  checkAccess(): ApiResponse<boolean> {
    throw new Error('Method not implemented.');
  }

}
