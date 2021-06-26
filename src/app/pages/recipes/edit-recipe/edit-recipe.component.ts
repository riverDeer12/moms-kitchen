import { ApiResponse } from './../../../shared/common/api-response';
import { Recipe } from './../../../shared/dtos/recipes/recipe';
import { Component, OnInit } from '@angular/core';
import { IRecipesService } from 'app/shared/services/recipes/i-recipes-service';
import { ActivatedRoute } from '@angular/router';
import { ICommonService } from 'app/shared/services/common/i-common-service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss'],
})
export class EditRecipeComponent implements OnInit {
  loadingData: boolean;
  recipe: Recipe;
  response: ApiResponse<Recipe>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private commonService: ICommonService,
    private recipesService: IRecipesService
  ) {
    this.loadingData = true;
    this.setPageSettings();
    this.getRecipe();
  }

  ngOnInit() {}

  getRecipe(): void {
    const recipeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.recipesService.getRecipe(recipeId).subscribe((response) => {
      this.response = response as ApiResponse<Recipe>;
      this.recipe = response.result;
      this.loadingData = false;
    });
  }

  setPageSettings(): void {
    this.commonService.setPageSettings(
      'Edit recipe',
      'Here you can edit recipe details.'
    );
  }
}
