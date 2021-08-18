import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminGuard } from './shared/guards/admin.guard';
import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/admin/login/login.component';

export const AppRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren:
          './layouts/home-layout/home-layout.module#HomeLayoutModule',
      },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        loadChildren:
          './layouts/admin-layout/admin-layout.module#AdminLayoutModule',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
