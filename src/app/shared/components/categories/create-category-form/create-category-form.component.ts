import { NotificationsService } from '../../../../core/services/notifications/notifications.service';
import { EditorConfig } from '../../../../settings/editor-settings';
import { Category } from '../../../../core/dtos/categories/category';
import { Router } from '@angular/router';
import { CategoriesService } from '../../../../core/services/categories/categories.service';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-category-form',
  templateUrl: './create-category-form.component.html',
  styleUrls: ['./create-category-form.component.scss'],
})
export class CreateCategoryFormComponent implements OnInit {
  @Input() returnUrl: string;

  loadingData: boolean;
  createForm: FormGroup;
  creationResponse: Category;

  editorConfig = EditorConfig.getConfig();

  constructor(
    private categoriesService: CategoriesService,
    private notificationsService: NotificationsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loadingData = true;
  }

  ngOnInit() {
    this.setCreateForm();
  }

  setCreateForm() {
    this.createForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  submit(): void {
    if (!this.createForm.valid) {
      this.notificationsService.error('Form is not valid!');
      return;
    }
    this.categoriesService.createCategory(this.createForm.value).subscribe(
      (response: Category) => {
        this.creationResponse = response as Category;
        this.router.navigateByUrl(this.returnUrl);
        this.notificationsService.success('Successfully created Category.');
      },
      (error: string) => {
        this.notificationsService.error(error);
      }
    );
  }
}
