import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PostRecipeRequest} from '../../dtos/recipes/post-recipe-request';
import {UpdateRecipeRequest} from '../../dtos/recipes/update-recipe-request';
import {RecipeFilterRequest} from '../../dtos/recipes/recipe-filter-request';
import {Recipe} from '../../dtos/recipes/recipe';
import {LatestRecipes} from '../../dtos/recipes/latest-recipes';
import {Category} from '../../dtos/categories/category';

@Injectable()
export class RecipesService {

    endpointPrefix = '/recipes/';

    constructor(private http: HttpClient) {
    }

    /**
     * Endpoint connector for
     * getting list of recipes.
     *
     * @param apiUrl api endpoint
     */
    getRecipes(apiUrl: string): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(apiUrl + this.endpointPrefix);
    }

    /**
     * Endpoint connector for
     * getting single recipe.
     *
     * @param apiUrl api endpoint
     * @param id recipe id
     */
    getRecipe(apiUrl: string, id: string): Observable<Recipe> {
        return this.http.get<Recipe>(apiUrl + this.endpointPrefix + id);
    }

    /**
     * Endpoint connector for
     * creating new recipe.
     *
     * @param apiUrl api endpoint
     * @param postRecipeRequest request with data
     */
    createRecipe(apiUrl: string, postRecipeRequest: PostRecipeRequest): Observable<Recipe> {
        return this.http.post<Recipe>(apiUrl + this.endpointPrefix, postRecipeRequest);
    }

    /**
     * Endpoint connector for
     * updating data about recipe.
     *
     * @param apiUrl api endpoint
     * @param id
     * @param updateRecipeRequest
     */
    updateRecipe(apiUrl: string,
                 id: string,
                 updateRecipeRequest: UpdateRecipeRequest
    ): Observable<Recipe> {
        return this.http.put<Recipe>(apiUrl + this.endpointPrefix + id, updateRecipeRequest);
    }

    /**
     * Endpoint connector for
     * deleting recipe.
     *
     * @param apiUrl api endpoint
     * @param id recipe id
     */
    deleteRecipe(apiUrl: string, id: string): Observable<Recipe> {
        return this.http.delete<Recipe>(apiUrl + this.endpointPrefix + id);
    }

    /**
     * Endpoint connector for
     * getting list of recipe categories.
     *
     * @param apiUrl api endpoint
     * @param id recipe id
     */
    getRecipeCategories(apiUrl: string, id: string): Observable<Category[]> {
        return this.http.get<Category[]>(apiUrl + this.endpointPrefix + id + '/categories');
    }

    /**
     * Endpoint connector for
     * getting active (public) recipes.
     *
     * @param apiUrl api endpoint
     */
    getActiveRecipes(apiUrl: string): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(apiUrl + this.endpointPrefix + 'public');
    }

    /**
     * Endpoint connector for
     * getting list of latest recipes
     * by rule.
     *
     * @param apiUrl api endpoint
     */
    getLatestRecipes(apiUrl: string): Observable<LatestRecipes> {
        return this.http.get<LatestRecipes>(apiUrl + this.endpointPrefix + 'latest');
    }

    /**
     * Endpoint connector for
     * filtering recipes by filter rule.
     *
     * @param apiUrl api endpoint
     * @param request filter data
     */
    filterRecipes(apiUrl: string, request: RecipeFilterRequest): Observable<Recipe[]> {
        return this.http.post<Recipe[]>(apiUrl + this.endpointPrefix + 'public-filter', request);
    }

    /**
     * Endpoint connector for
     * getting list all active (public) recipes.
     *
     * @param apiUrl api endpoint
     * @param id recipe id
     */
    getRecipePublicDetails(apiUrl: string, id: string): Observable<Recipe> {
        return this.http.get<Recipe>(apiUrl + this.endpointPrefix + id + '/details');
    }
}
