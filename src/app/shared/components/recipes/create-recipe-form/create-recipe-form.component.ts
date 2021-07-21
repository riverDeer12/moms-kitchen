import { RecipesService } from './../../../services/recipes/recipes.service';
import { Recipe } from './../../../dtos/recipes/recipe';
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
  creationResponse: Recipe;

  constructor(
    private formBuilder: FormBuilder,
    private service: RecipesService
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
      categories: new FormControl('', Validators.required),
    });

    this.loadingData = false;
  }

  submit(): void {
    this.service
      .createRecipe(this.createForm.value)
      .subscribe((response: Recipe) => {
        this.creationResponse = response as Recipe;
        console.log(this.createForm.value);
      });
  }

  prepareSelectors(): void {
    const realCategories = this.createForm
      .get('categories')
      .value.map((x) => x.id);
    const realComplexityLevel = this.createForm
      .get('complexityLevelId')
      .value.map((x) => x.id);

    this.createForm.get('categories').setValue(realCategories);
    this.createForm.get('complexityLevelId').setValue(realComplexityLevel[0]);
  }
}
