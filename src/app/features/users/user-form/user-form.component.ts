import {Component, Input} from '@angular/core';
import {User} from "../models/user";
import {FormType} from "../../shared/enums/form-type";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {MessageService} from "primeng/api";
import {UsersService} from "../services/users.service";
import {DynamicDialogRef} from "primeng/dynamicdialog";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {DividerModule} from "primeng/divider";
import {MessagesModule} from "primeng/messages";
import {ToastModule} from "primeng/toast";

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    MessagesModule,
    ToastModule
  ],
  providers: [
    MessageService
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  @Input() type!: FormType;
  @Input() data!: User;
  @Input() dialogRef!: DynamicDialogRef;

  form!: FormGroup;

  public get formType(): typeof FormType{
    return FormType;
  }

  constructor(private formBuilder: FormBuilder,
              private userService: UsersService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm = () => this.type === FormType.Create ?
    this.initCreateForm() :
    this.initUpdateForm()

  private initCreateForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  private initUpdateForm() {
    this.form = this.formBuilder.group({
      username: [this.data.username, Validators.required],
      email: [this.data.email, [Validators.required, Validators.email]]
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.messageService.add({
        severity: 'warning',
        summary: 'Form is not valid',
        detail: 'Correct error messages and try again.'
      });
      return;
    }

    this.type === FormType.Create ?
      this.createUser() :
      this.updateUser();
  }

  private createUser() {
    this.userService.createUser(this.form.value).subscribe((response) => {
      this.dialogRef.close();
      this.messageService.add({
        severity: 'success',
        summary: 'User created',
        detail: 'User is created successfully.'
      });
    }, (error) => {
      this.messageService.add({
        severity: 'error',
        summary: 'User is not created',
        detail: 'There was an error while creating new user.'
      });
    })
  }

  private updateUser() {
    this.userService.updateUser(this.data.id, this.form.value).subscribe((response) => {
      this.dialogRef.close();
      this.messageService.add({
        severity: 'success',
        summary: 'User updated',
        detail: 'User is updated successfully.'
      });
    }, (error) => {
      this.messageService.add({
        severity: 'error',
        summary: 'User is not updated',
        detail: 'There was an error while updating user.'
      });
    })
  }
}
