import {fadeInAnimation} from 'app/shared/animations/page.animation';
import {Component, Input, OnInit} from '@angular/core';
import {RecipesService} from '../../../../../../projects/moms-kitchen-common/src/lib/services/recipes/recipes.service';
import {environment} from '../../../../../environments/environment';
import {Recipe} from '../../../../../../projects/moms-kitchen-common/src/lib/dtos/recipes/recipe';

@Component({
    selector: 'app-recipe-public-details',
    templateUrl: './recipe-public-details.component.html',
    animations: [fadeInAnimation],
    styleUrls: ['./recipe-public-details.component.scss']
})
export class RecipePublicDetailsComponent implements OnInit {
    @Input() id: string;

    recipe: Recipe;
    loadingData: boolean;
    imageLoading: boolean;

    constructor(private service: RecipesService) {
        this.loadingData = true;
        this.imageLoading = true;
    }

    ngOnInit() {
        this.getRecipe();
    }

    getRecipe() {
        this.service
            .getRecipePublicDetails(environment.apiUrl, this.id)
            .subscribe((response: Recipe) => {
                this.recipe = Object.assign(new Recipe(), response);
                this.loadingData = false;
            });
    }

    imageLoaded(): void {
        this.imageLoading = false;
    }
}
