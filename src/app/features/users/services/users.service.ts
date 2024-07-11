import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersApiEndpoint = environment.apiUrl + '/users/';

  constructor(private http: HttpClient) {
  }

  getUsers = () => this.http.get<User[]>(this.usersApiEndpoint);

  getUser = (id: any) => this.http.get<User>(this.usersApiEndpoint + id);

  createUser = (formData: any) => this.http.post<User>(this.usersApiEndpoint, formData);

  updateUser = (id: any, formData: any) => this.http.put<User>(this.usersApiEndpoint + id, formData);

  deleteUser = (id: any) => this.http.delete<User>(this.usersApiEndpoint + id);
}
