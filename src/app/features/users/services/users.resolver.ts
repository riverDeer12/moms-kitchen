import {ResolveFn} from '@angular/router';
import {inject} from "@angular/core";
import {UsersService} from "./users.service";
import {User} from "../models/user";
import {Observable} from "rxjs";

export const usersResolver: ResolveFn<Observable<User[]>> = (route, state) => {

  return inject(UsersService).getUsers();
};
