import { Injectable } from '@angular/core';
import { AuthUser } from 'app/shared/common/auth-user';
import { ApiResponse } from './../../common/api-response';

@Injectable()
export abstract class IAuthService {
    abstract login(): ApiResponse<string>;
    abstract getAuthUser(): ApiResponse<AuthUser>;
    abstract logOff(): ApiResponse<string>;
    abstract checkAccess(): ApiResponse<boolean>;
}
