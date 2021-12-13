import { AuthService } from '../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/admin/dashboard', title: 'Dashboard', icon: 'nc-chart-pie-36', class: '' },
  { path: '/admin/recipes', title: 'Recipes', icon: 'nc-paper', class: '' },
  {
    path: '/admin/categories',
    title: 'Categories',
    icon: 'nc-bookmark-2',
    class: '',
  },
  {
    path: '/admin/complexity-levels',
    title: 'Complexity Levels',
    icon: 'nc-vector',
    class: '',
  },
  {
    path: '/admin/users',
    title: 'Users',
    icon: 'nc-badge',
    class: '',
  },
];

@Component({
  moduleId: module.id,
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }

  logOut(): void {
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }
}
