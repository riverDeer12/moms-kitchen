import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmDeleteComponent} from '../../common/confirm-delete/confirm-delete.component';
import {EntityType} from 'app/core/constants/entity-type';
import {Table} from 'primeng/table';
import {RecipesService} from '../../../../../../projects/moms-kitchen-common/src/lib/services/recipes/recipes.service';
import {CommonService} from '../../../../../../projects/moms-kitchen-common/src/lib/services/common/common.service';
import {NotificationsService} from '../../../../../../projects/moms-kitchen-common/src/lib/services/notifications/notifications.service';
import {environment} from '../../../../../environments/environment';
import {Recipe} from '../../../../../../projects/moms-kitchen-common/src/lib/dtos/recipes/recipe';

@Component({
    selector: 'app-recipes-list',
    templateUrl: './recipes-list.component.html',
    styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
    recipes: Recipe[] = [];
    loadingData: boolean;

    constructor(
        private commonService: CommonService,
        private notificationService: NotificationsService,
        private recipesService: RecipesService,
        private router: Router,
        private modalService: NgbModal
    ) {
        this.loadingData = true;
        this.setPageSettings();
    }

    ngOnInit(): void {
        this.getRecipes();
    }

    setPageSettings(): void {
        this.commonService.setPageSettings(
            'Recipes list',
            'List of all registered recipes'
        );
    }

    getRecipes(): void {
        this.recipesService.getRecipes(environment.apiUrl).subscribe(
            (response: Recipe[]) => {
                this.recipes = response.map((x) => Object.assign(new Recipe(), x));
                this.loadingData = false;
            },
            () => {
                this.notificationService.error('Error getting recipes.');
            }
        );
    }

    confirmDelete(recipeId: string): void {
        const modalRef = this.modalService.open(ConfirmDeleteComponent);
        modalRef.componentInstance.entityId = recipeId;
        modalRef.componentInstance.entityType = EntityType.RECIPES;
        modalRef.componentInstance.returnUrl = '/admin/recipes';
    }

    goToInfoPage(recipeId: string): void {
        this.router.navigateByUrl('/admin/recipes/info/' + recipeId);
    }

    goToEditPage(recipeId: string): void {
        this.router.navigateByUrl('/admin/recipes/edit/' + recipeId);
    }

    goToConfirmDeletePage(recipeId: string): void {
        this.router.navigateByUrl('/admin/recipes/delete/' + recipeId);
    }

    clear(table: Table) {
        table.clear();
    }
}
