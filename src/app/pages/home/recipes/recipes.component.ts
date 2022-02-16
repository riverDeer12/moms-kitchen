import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {fadeInAnimation} from 'app/shared/animations/page.animation';
import {NotificationsService} from '../../../../../projects/moms-kitchen-common/src/lib/services/notifications/notifications.service';
import {RecipesService} from '../../../../../projects/moms-kitchen-common/src/lib/services/recipes/recipes.service';
import {environment} from '../../../../environments/environment';
import {Recipe} from '../../../../../projects/moms-kitchen-common/src/lib/dtos/recipes/recipe';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss'],
    animations: [fadeInAnimation],
})
export class RecipesComponent implements OnInit {
    loadingData: boolean;
    recipes: Recipe[];
    navbarLabel = 'Mom\'s Kitchen';
    filterForm: FormGroup;

    constructor(
        private service: RecipesService,
        private notificationsService: NotificationsService,
        private fb: FormBuilder
    ) {
        this.loadingData = true;
        this.setFilterForm();
    }

    ngOnInit() {
        this.getRecipes();
    }

    emptyForm = (): boolean => {
        return (
            this.filterForm.get('keyword').value === '' &&
            this.filterForm.get('categoryIds').value === ''
        );
    };

    setFilterForm(): void {
        this.filterForm = this.fb.group({
            keyword: new FormControl(''),
            categoryIds: new FormControl([]),
        });
    }

    getRecipes(): void {
        this.service.getActiveRecipes(environment.apiUrl, ).subscribe((response: Recipe[]) => {
            this.recipes = response.map((x) => Object.assign(new Recipe(), x));
            this.loadingData = false;
        });
    }

    filterRecipes(): void {
        this.loadingData = true;

        if (!this.filterForm.valid) {
            return;
        }

        this.service.filterRecipes(environment.apiUrl, this.filterForm.value).subscribe(
            (response: Recipe[]) => {
                this.recipes = response.map((x) => Object.assign(new Recipe(), x));
                this.loadingData = false;
            },
            () => {
                this.notificationsService.error(
                    'At least one search property needs to be populated.'
                );
                this.loadingData = false;
            }
        );
    }
}
