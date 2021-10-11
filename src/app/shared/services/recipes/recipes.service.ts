import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'app/shared/dtos/categories/category';
import { LatestRecipes } from 'app/shared/dtos/recipes/latest-recipes';
import { PostRecipeRequest } from 'app/shared/dtos/recipes/post-recipe-request';
import { Recipe } from 'app/shared/dtos/recipes/recipe';
import { RecipeFilterRequest } from 'app/shared/dtos/recipes/recipe-filter-request';
import { UpdateRecipeRequest } from 'app/shared/dtos/recipes/update-recipe-request';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable()
export class RecipesService {
  recipesUrl = environment.apiUrl + '/recipes/';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrl);
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(this.recipesUrl + id);
  }

  createRecipe(postRecipeRequest: PostRecipeRequest): Observable<Recipe> {
    return this.http.post<Recipe>(this.recipesUrl, postRecipeRequest);
  }

  updateRecipe(
    id: string,
    updateRecipeRequest: UpdateRecipeRequest
  ): Observable<Recipe> {
    return this.http.put<Recipe>(this.recipesUrl + id, updateRecipeRequest);
  }

  deleteRecipe(id: string): Observable<Recipe> {
    return this.http.delete<Recipe>(this.recipesUrl + id);
  }

  getRecipeCategories(id: string): Observable<Category[]> {
    return this.http.get<Category[]>(this.recipesUrl + id + '/categories');
  }

  getActiveRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrl + 'public');
  }

  getLatestRecipes(): Observable<LatestRecipes> {
    return this.http.get<LatestRecipes>(this.recipesUrl + 'latest');
  }

  filterRecipes(request: RecipeFilterRequest): Observable<Recipe[]> {
    return this.http.post<Recipe[]>(this.recipesUrl + 'public-filter', request);
  }

  getRecipePublicDetails(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(this.recipesUrl + id + '/details');
  }
}
