import { Router } from '@angular/router';
import { RecipesService } from './../../../services/recipes/recipes.service';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Recipe } from 'app/shared/dtos/recipes/recipe';

@Component({
  selector: 'app-edit-recipe-form',
  templateUrl: './edit-recipe-form.component.html',
  styleUrls: ['./edit-recipe-form.component.scss'],
})
export class EditRecipeFormComponent implements OnInit {
  @Input() id: string;
  @Input() returnUrl: string;

  loadingData: boolean;
  recipe: Recipe;
  response: Recipe;
  editForm: FormGroup;
  complexityLevelId: string;

  constructor(
    private service: RecipesService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loadingData = true;
  }

  ngOnInit() {
    this.getRecipe();
  }

  getRecipe(): void {
    this.service.getRecipe(this.id).subscribe((response: Recipe) => {
      this.recipe = response as Recipe;
      this.setEditForm();
    });
  }

  setEditForm(): void {
    this.editForm = this.fb.group({
      isActive: new FormControl(this.recipe.isActive),
      name: new FormControl(this.recipe.name, Validators.required),
      description: new FormControl(
        this.recipe.description,
        Validators.required
      ),
      complexityLevelId: new FormControl('', Validators.required),
      categoryIds: new FormControl('', Validators.required),
    });

    this.loadingData = false;
  }

  submit(): void {
    if (!this.editForm.valid) {
      console.log('Form not valid!');
      return;
    }

    this.prepareSelectors();

    this.service
      .updateRecipe(this.id, this.editForm.value)
      .subscribe((response: Recipe) => {
        this.response = response as Recipe;
        this.router.navigateByUrl(this.returnUrl);
      });
  }

  prepareSelectors(): void {
    const realCategories = this.editForm
      .get('categoryIds')
      .value.map((x) => x.id);
    const realComplexityLevel = this.editForm
      .get('complexityLevelId')
      .value.map((x) => x.id);

    this.editForm.get('categoryIds').setValue(realCategories);
    this.editForm.get('complexityLevelId').setValue(realComplexityLevel[0]);
  }
}
