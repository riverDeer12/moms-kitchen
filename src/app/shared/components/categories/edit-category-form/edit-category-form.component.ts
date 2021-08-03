import { NotificationsService } from './../../../services/notifications/notifications.service';
import { EditorConfig } from './../../../../settings/editor-settings';
import { CategoriesService } from 'app/shared/services/categories/categories.service';
import { Category } from 'app/shared/dtos/categories/category';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-category-form',
  templateUrl: './edit-category-form.component.html',
  styleUrls: ['./edit-category-form.component.scss'],
})
export class EditCategoryFormComponent implements OnInit {
  @Input() id: string;
  @Input() returnUrl: string;

  loadingData: boolean;
  editForm: FormGroup;
  updateResponse: Category;
  category: Category;

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
    this.getComplexityLevel();
  }

  getComplexityLevel() {
    this.categoriesService.getCategory(this.id).subscribe((response: Category) => {
      this.category = response as Category;
      this.setEditForm();
    });
  }

  setEditForm() {
    this.editForm = this.formBuilder.group({
      isActive: new FormControl(this.category.isActive, Validators.required),
      name: new FormControl(this.category.name, Validators.required),
      description: new FormControl(
        this.category.description,
        Validators.required
      ),
    });

    this.loadingData = false;
  }

  submit(): void {
    if (!this.editForm.valid) {
      this.notificationsService.error('Form is not valid!');
      return;
    }
    this.categoriesService.updateCategory(this.id, this.editForm.value).subscribe(
      (response: Category) => {
        this.updateResponse = response as Category;
        this.router.navigateByUrl(this.returnUrl);
        this.notificationsService.success('Successfully updated Category.');
      },
      (error: string) => {
        this.notificationsService.error(error);
      }
    );
  }
}
