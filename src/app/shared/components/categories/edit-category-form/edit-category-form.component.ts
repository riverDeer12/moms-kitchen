import { EditorConfig } from '../../../../settings/editor-settings';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { Category, CategoriesService } from 'moms-kitchen-common';

@Component({
  selector: 'app-edit-category-form',
  templateUrl: './edit-category-form.component.html',
  styleUrls: ['./edit-category-form.component.scss'],
})
export class EditCategoryFormComponent implements OnInit {
  @Input() category: Category;

  editForm: FormGroup;
  updateResponse: Category;
  editorConfig = EditorConfig.getConfig();

  constructor(
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.setEditForm();
  }

  setEditForm() {
    this.editForm = this.formBuilder.group({
      isActive: new FormControl(this.category.isActive),
      name: new FormControl(this.category.name, Validators.required),
      description: new FormControl(
        this.category.description,
        Validators.required
      ),
    });
  }

  submit(): void {
    if (!this.editForm.valid) {
      return;
    }
    this.categoriesService
      .updateCategory(environment.apiUrl, this.category.id, this.editForm.value)
      .subscribe(
        (response: Category) => {
          this.updateResponse = response as Category;
          this.router.navigateByUrl('/admin/categories').then();
        },
        (error: string) => {}
      );
  }
}
