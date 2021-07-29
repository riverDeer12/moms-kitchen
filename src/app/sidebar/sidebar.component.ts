import { AuthService } from './../shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/admin/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '' },
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
];

@Component({
  moduleId: module.id,
  selector: 'sidebar-cmp',
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
