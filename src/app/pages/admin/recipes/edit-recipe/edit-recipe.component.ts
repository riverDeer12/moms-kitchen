import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Recipe} from '../../../../../../projects/moms-kitchen-common/src/lib/dtos/recipes/recipe';
import {CommonService} from '../../../../../../projects/moms-kitchen-common/src/lib/services/common/common.service';

@Component({
    selector: 'app-edit-recipe',
    templateUrl: './edit-recipe.component.html',
    styleUrls: ['./edit-recipe.component.scss'],
})
export class EditRecipeComponent implements OnInit {
    recipe: Recipe;

    constructor(
        private activatedRoute: ActivatedRoute,
        private commonService: CommonService
    ) {
        this.setPageSettings();
    }

    ngOnInit() {
        this.listenToResolver();
    }

    /**
     * Listen to resolver
     * actions.
     */
    listenToResolver(): void {
        this.activatedRoute.data.subscribe((response: any) => {
            this.recipe = Object.assign(new Recipe(), response.recipe);
        });
    }

    setPageSettings(): void {
        this.commonService.setPageSettings(
            'Edit recipe',
            'Here you can edit recipe details.'
        );
    }
}
