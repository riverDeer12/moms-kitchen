import { UsersComponent } from './../../pages/admin/users/users.component';
import { RecipeInfoComponent } from './../../pages/admin/recipes/recipe-info/recipe-info.component';
import { CategoryInfoComponent } from './../../pages/admin/categories/category-info/category-info.component';
import { EditComplexityLevelComponent } from './../../pages/admin/complexity-levels/edit-complexity-level/edit-complexity-level.component';
import { CreateRecipeComponent } from './../../pages/admin/recipes/create-recipe/create-recipe.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../pages/admin/dashboard/dashboard.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateCategoryComponent } from 'app/pages/admin/categories/create-category/create-category.component';
import { EditCategoryComponent } from 'app/pages/admin/categories/edit-category/edit-category.component';
import { EditRecipeComponent } from 'app/pages/admin/recipes/edit-recipe/edit-recipe.component';

import { CreateComplexityLevelComponent } from 'app/pages/admin/complexity-levels/create-complexity-level/create-complexity-level.component';
import { ComplexityLevelInfoComponent } from 'app/pages/admin/complexity-levels/complexity-level-info/complexity-level-info.component';

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
    CreateCategoryComponent,
    EditCategoryComponent,
    CategoryInfoComponent,
    CreateRecipeComponent,
    EditRecipeComponent,
    RecipeInfoComponent,
    CreateComplexityLevelComponent,
    EditComplexityLevelComponent,
    ComplexityLevelInfoComponent,
    UsersComponent
  ]
})
export class AdminLayoutModule {}
