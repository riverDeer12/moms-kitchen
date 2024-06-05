import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersApiEndpoint = environment.apiUrl + '/users/';

  constructor(private http: HttpClient) { }

  getUsers = () => this.http.get<User[]>(this.usersApiEndpoint);
}
