import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'app/shared/common/api-response';
import { PostRecipeRequest } from 'app/shared/dtos/recipes/post-recipe-request';
import { Recipe } from 'app/shared/dtos/recipes/recipe';
import { UpdateRecipeRequest } from 'app/shared/dtos/recipes/update-recipe-request';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { IRecipesService } from './i-recipes-service';

@Injectable()
export class RecipesService {
  recipesUrl = environment.apiUrl + '/recipes';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrl);
  }

  getRecipe(recipeId: string): Observable<Recipe> {
    return this.http.get<Recipe>(this.recipesUrl + '/' + recipeId);
  }

  createRecipe(postRecipeRequest: PostRecipeRequest): Observable<string> {
    return this.http.post<string>(this.recipesUrl, postRecipeRequest)
  }

  updateRecipe(
    recipeId: string,
    updateRecipeRequest: UpdateRecipeRequest
  ): Observable<Recipe> {
    return this.http.put<Recipe>(
      this.recipesUrl + '/' + recipeId,
      updateRecipeRequest
    );
  }

  deleteRecipe(recipeId: string): Observable<Recipe> {
    return this.http.delete<Recipe>(this.recipesUrl + '/' + recipeId);
  }
}
