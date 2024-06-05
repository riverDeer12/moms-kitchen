import {Component, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {AvatarModule} from "primeng/avatar";
import {MegaMenuModule} from "primeng/megamenu";
import {RippleModule} from "primeng/ripple";
import {MenuItem} from "primeng/api";
import {CommonModule} from "@angular/common";
import {MenubarModule} from "primeng/menubar";
import {BadgeModule} from "primeng/badge";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'public-menu',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    AvatarModule,
    MegaMenuModule,
    RippleModule,
    MenubarModule,
    BadgeModule,
    InputTextModule
  ],
  templateUrl: './public-menu.component.html',
  styleUrl: './public-menu.component.scss'
})
export class PublicMenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        route: ''
      },
      {
        label: 'Users',
        icon: 'pi pi-star',
        route: 'users'
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        badge: '3'
      }
    ];
  }
}
