import { RecipesService } from './../../../shared/services/recipes/recipes.service';
import { CommonService } from 'app/shared/services/common/common.service';
import { ApiResponse } from './../../../shared/common/api-response';
import { Recipe } from './../../../shared/dtos/recipes/recipe';
import { Component, OnInit } from '@angular/core';
import { IRecipesService } from 'app/shared/services/recipes/i-recipes-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss'],
})
export class EditRecipeComponent implements OnInit {
  loadingData: boolean;
  updateResponse: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private commonService: CommonService,
    private recipesService: RecipesService
  ) {
    this.loadingData = true;
    this.setPageSettings();
    this.getRecipe();
  }

  ngOnInit() {}

  getRecipe(): void {
    const recipeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.recipesService.getRecipe(recipeId).subscribe((response) => {
      this.updateResponse = response as Recipe;
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
