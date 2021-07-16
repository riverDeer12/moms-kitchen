import { RecipeInfoComponent } from './../../pages/recipes/recipe-info/recipe-info.component';
import { CategoryInfoComponent } from './../../pages/categories/category-info/category-info.component';
import { EditComplexityLevelComponent } from './../../pages/complexity-levels/edit-complexity-level/edit-complexity-level.component';
import { CreateComplexityLevelComponent } from './../../pages/complexity-levels/create-complexity-level/create-complexity-level.component';
import { CreateRecipeComponent } from './../../pages/recipes/create-recipe/create-recipe.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateCategoryComponent } from 'app/pages/categories/create-category/create-category.component';
import { EditCategoryComponent } from 'app/pages/categories/edit-category/edit-category.component';
import { EditRecipeComponent } from 'app/pages/recipes/edit-recipe/edit-recipe.component';
import { ComplexityLevelInfoComponent } from 'app/pages/complexity-levels/complexity-level-info/complexity-level-info.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    CategoryInfoComponent,
    CreateRecipeComponent,
    EditRecipeComponent,
    RecipeInfoComponent,
    CreateComplexityLevelComponent,
    EditComplexityLevelComponent,
    ComplexityLevelInfoComponent
  ]
})
export class AdminLayoutModule {}
