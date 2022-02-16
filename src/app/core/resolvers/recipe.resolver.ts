import {Injectable} from '@angular/core';
import {Recipe} from '../../../../projects/moms-kitchen-common/src/lib/dtos/recipes/recipe';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {RecipesService} from '../../../../projects/moms-kitchen-common/src/lib/services/recipes/recipes.service';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class RecipeResolver implements Resolve<Recipe> {

    constructor(private router: Router,
                private recipesService: RecipesService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe> {
        const routeId = route.paramMap.get('id');

        if (!routeId) {
            this.router.navigateByUrl('/recipes').then();
            return;
        }

        return this.recipesService.getRecipe(environment.apiUrl, routeId);
    }
}
