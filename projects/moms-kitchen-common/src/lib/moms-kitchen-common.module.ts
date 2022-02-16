import {NgModule} from '@angular/core';
import {MomsKitchenCommonComponent} from './moms-kitchen-common.component';
import {RecipesService} from './services/recipes/recipes.service';
import {CategoriesService} from './services/categories/categories.service';
import {ComplexityLevelsService} from './services/complexity-levels/complexity-levels.service';
import {CommonService} from './services/common/common.service';
import {NotificationsService} from './services/notifications/notifications.service';

@NgModule({
    declarations: [MomsKitchenCommonComponent],
    imports: [],
    providers: [
        CommonService,
        NotificationsService,
        RecipesService,
        CategoriesService,
        ComplexityLevelsService
    ],
    exports: [MomsKitchenCommonComponent]
})
export class MomsKitchenCommonModule {
}
