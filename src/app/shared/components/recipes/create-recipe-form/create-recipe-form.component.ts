import { RecipesService } from './../../../services/recipes/recipes.service';
import { Recipe } from './../../../dtos/recipes/recipe';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'app/shared/dtos/categories/category';
import { CategoriesService } from 'app/shared/services/categories/categories.service';

@Component({
  selector: 'app-create-recipe-form',
  templateUrl: './create-recipe-form.component.html',
  styleUrls: ['./create-recipe-form.component.scss']
})
export class CreateRecipeFormComponent implements OnInit {
  @Input() returnUrl: string;

  loadingData: boolean;
  createForm: FormGroup;
  creationResponse: Recipe;
  categories: Category[];

  constructor(
    private recipesService: RecipesService,
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
      complexityLevelId: new FormControl('', Validators.required)
    });

    this.setComplexityControl();
  }

  setComplexityControl(): void {
    this.categoriesService
    .getCategories()
    .subscribe((response: Category[]) => {
      this.categories = response as Category[];
      this.loadingData = false;
    });
  }

  submit(): void {
    this.recipesService
      .createRecipe(this.createForm.value)
      .subscribe((response: Recipe) => {
        this.creationResponse = response as Recipe;
        this.router.navigateByUrl(this.returnUrl);
      });
  }

}
