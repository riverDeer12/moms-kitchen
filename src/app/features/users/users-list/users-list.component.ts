import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {TableModule} from "primeng/table";
import {User} from "../models/user";
import {ActivatedRoute} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {ReactiveFormsModule} from "@angular/forms";
import {DialogService} from "primeng/dynamicdialog";
import {DialogFormComponent} from "../../shared/dialog-form/dialog-form.component";
import {EntityType} from "../../shared/enums/entity-type";
import {FormType} from "../../shared/enums/form-type";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";

@Component({
  selector: 'users-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [
    DialogService,
    MessageService
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  @Input() users!: User[];

  constructor(private activatedRoute: ActivatedRoute, private dialogService: DialogService) {
    this.getResolverData();
  }

  private getResolverData() {
    this.activatedRoute.data.subscribe((response) => {
      this.users = response['users'].map((x: User) =>
        Object.assign(new User(), x)
      );
    });
  }

  openCreateForm(): void {
    this.dialogService.open(DialogFormComponent, {
      header: 'Create new user',
      data: {
        entityType: EntityType.User,
        formType: FormType.Create
      }
    })
  }

  openUpdateForm(user: User): void {
    this.dialogService.open(DialogFormComponent, {
      header: `Update user: ${user.username}`,
      data: {
        entityType: EntityType.User,
        formType: FormType.Update,
        data: user
      }
    })
  }
}
