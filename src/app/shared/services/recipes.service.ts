import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { ApiResponse } from '../common/api-response';
import { PostRecipeRequest } from '../dtos/recipes/post-recipe-request';
import { Recipe } from '../dtos/recipes/recipe';
import { UpdateRecipeRequest } from '../dtos/recipes/update-recipe-request';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

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
