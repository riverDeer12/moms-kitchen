import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {fadeInAnimation} from 'app/shared/animations/page.animation';
import {RecipesService} from '../../../../projects/moms-kitchen-common/src/lib/services/recipes/recipes.service';
import {environment} from '../../../environments/environment';
import {LatestRecipes} from '../../../../projects/moms-kitchen-common/src/lib/dtos/recipes/latest-recipes';
import {Recipe} from '../../../../projects/moms-kitchen-common/src/lib/dtos/recipes/recipe';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [fadeInAnimation]
})
export class HomeComponent implements OnInit {
    loadingData: boolean;
    latestRecipes: LatestRecipes;
    navbarLabel = 'Mom\'s Kitchen';

    constructor(private recipesService: RecipesService, private router: Router) {
        this.loadingData = true;
    }

    ngOnInit() {
        this.getLatestRecipes();
    }

    getLatestRecipes(): void {
        this.recipesService.getLatestRecipes(environment.apiUrl).subscribe((response: LatestRecipes) => {
            this.latestRecipes = Object.assign(new Recipe(), response);
            this.loadingData = false;
        });
    }

    openRecipePage(id: string): void {
        this.router.navigateByUrl('/recipes/' + id);
    }

    openCategoryPage(id: string): void {
        this.router.navigateByUrl('/categories/' + id);
    }
}
