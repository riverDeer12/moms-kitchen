import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {TableModule} from "primeng/table";
import {User} from "../models/user";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'users-list',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  @Input() users!: User[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.getResolverData();
  }

  private getResolverData() {
    this.activatedRoute.data.subscribe((response) => {
      this.users = response['users'].map((x: User) =>
        Object.assign(new User(), x)
      );
    });
  }
}
