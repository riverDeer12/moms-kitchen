import { EditorConfig } from '../../../../settings/editor-settings';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { environment } from '../../../../../environments/environment';
import { Category, CategoriesService } from 'moms-kitchen-common';

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
      return;
    }
    this.categoriesService
      .createCategory(environment.apiUrl, this.createForm.value)
      .subscribe(
        (response: Category) => {
          this.creationResponse = response as Category;
          this.router.navigateByUrl(this.returnUrl);
        },
        (error: string) => {}
      );
  }
}
