import { Router } from '@angular/router';
import { Recipe } from 'app/shared/dtos/recipes/recipe';
import { RecipesService } from './../../../services/recipes/recipes.service';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-recipe-form',
  templateUrl: './create-recipe-form.component.html',
  styleUrls: ['./create-recipe-form.component.scss'],
})
export class CreateRecipeFormComponent implements OnInit {
  @Input() returnUrl: string;

  loadingData: boolean;
  createForm: FormGroup;
  createdRecipe: Recipe;

  constructor(
    private formBuilder: FormBuilder,
    private service: RecipesService,
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
      complexityLevelId: new FormControl('', Validators.required),
      categoryIds: new FormControl('', Validators.required)
    });

    this.loadingData = false;
  }

  submit(): void {
    if (!this.createForm.valid) {
      console.log('Form not valid!');
      return;
    }

    this.prepareSelectors();

    this.service
      .createRecipe(this.createForm.value)
      .subscribe((response: Recipe) => {
        this.createdRecipe = response as Recipe;
        this.router.navigateByUrl(this.returnUrl);
      });
  }

  prepareSelectors(): void {
    const realCategories = this.createForm
      .get('categoryIds')
      .value.map((x) => x.id);
    const realComplexityLevel = this.createForm
      .get('complexityLevelId')
      .value.map((x) => x.id);

    this.createForm.get('categoryIds').setValue(realCategories);
    this.createForm.get('complexityLevelId').setValue(realComplexityLevel[0]);
  }
}
