import {Component} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {EntityType} from "../enums/entity-type";
import {UserFormComponent} from "../../users/user-form/user-form.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'dialog-form',
  standalone: true,
  imports: [
    CommonModule,
    UserFormComponent
  ],
  templateUrl: './dialog-form.component.html',
  styleUrl: './dialog-form.component.scss'
})
export class DialogFormComponent {
  public get type(): typeof EntityType {
    return EntityType;
  }

  constructor(public dialogRef: DynamicDialogRef,
              public dialogConfig: DynamicDialogConfig) {
  }
}
