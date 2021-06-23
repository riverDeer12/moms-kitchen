import { UpdateRecipeRequest } from './../../shared/dtos/recipes/update-recipe-request';
import { PostRecipeRequest } from './../../shared/dtos/recipes/post-recipe-request';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'app/shared/common/api-response';
import { Recipe } from 'app/shared/dtos/recipes/recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class IRecipesService {
  abstract getRecipes(): Observable<ApiResponse<Recipe>>;
  abstract getRecipe(recipeId: string): Observable<ApiResponse<Recipe>>;
  abstract createRecipe(postRecipeRequest: PostRecipeRequest): Observable<ApiResponse<Recipe>>;
  abstract updateRecipe(recipeId: string, updateRecipeRequest: UpdateRecipeRequest): Observable<ApiResponse<Recipe>>;
  abstract deleteRecipe(recipeId: string): Observable<ApiResponse<Recipe>>;
}
