import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'app/shared/common/api-response';
import { PostRecipeRequest } from 'app/shared/dtos/recipes/post-recipe-request';
import { Recipe } from 'app/shared/dtos/recipes/recipe';
import { UpdateRecipeRequest } from 'app/shared/dtos/recipes/update-recipe-request';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { IRecipesService } from './i-recipes-service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService implements IRecipesService {

  recipesUrl = environment.apiUrl + '/recipes';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<ApiResponse<Recipe>> {
    return this.http.get<ApiResponse<Recipe>>(this.recipesUrl);
  }

  getRecipe(recipeId: string): Observable<ApiResponse<Recipe>> {
    return this.http.get<ApiResponse<Recipe>>(this.recipesUrl + '/' + recipeId);
  }

  createRecipe(postRecipeRequest: PostRecipeRequest): Observable<ApiResponse<Recipe>> {
    return this.http.post<ApiResponse<Recipe>>(this.recipesUrl, postRecipeRequest)
  }

  updateRecipe(recipeId: string, updateRecipeRequest: UpdateRecipeRequest): Observable<ApiResponse<Recipe>> {
    return this.http.put<ApiResponse<Recipe>>(this.recipesUrl + '/' + recipeId, updateRecipeRequest)
  }

  deleteRecipe(recipeId: string): Observable<ApiResponse<Recipe>> {
    return this.http.delete<ApiResponse<Recipe>>(this.recipesUrl + '/' + recipeId);
  }
}
