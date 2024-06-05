import { Routes } from '@angular/router';
import {UsersListComponent} from "./features/users/users-list/users-list.component";
import {usersResolver} from "./features/users/services/users.resolver";

export const routes: Routes = [
  {
    path: 'users',
    component: UsersListComponent,
    resolve: {
      users: usersResolver
    }
  }
];
