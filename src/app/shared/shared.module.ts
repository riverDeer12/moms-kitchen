import { ComplexityLevelDetailsComponent } from './components/complexity-levels/complexity-level-details/complexity-level-details.component';
import { CreateComplexityLevelFormComponent } from './components/complexity-levels/create-complexity-level-form/create-complexity-level-form.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { EditRecipeFormComponent } from './components/recipes/edit-recipe-form/edit-recipe-form.component';
import { CreateRecipeFormComponent } from './components/recipes/create-recipe-form/create-recipe-form.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { CreateCategoryFormComponent } from './components/categories/create-category-form/create-category-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCategoryFormComponent } from './components/categories/edit-category-form/edit-category-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { EditComplexityLevelFormComponent } from './components/complexity-levels/edit-complexity-level-form/edit-complexity-level-form.component';
import { ComplexityLevelsListComponent } from './components/complexity-levels/complexity-levels-list/complexity-levels-list.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    LoginFormComponent,
    CategoriesListComponent,
    CreateCategoryFormComponent,
    EditCategoryFormComponent,
    RecipesListComponent,
    CreateRecipeFormComponent,
    EditRecipeFormComponent,
    ComplexityLevelsListComponent,
    CreateComplexityLevelFormComponent,
    EditComplexityLevelFormComponent,
    ComplexityLevelDetailsComponent
  ],
  exports: [
    LoginFormComponent,
    CategoriesListComponent,
    CreateCategoryFormComponent,
    EditCategoryFormComponent,
    RecipesListComponent,
    CreateRecipeFormComponent,
    EditRecipeFormComponent,
    ComplexityLevelsListComponent,
    CreateComplexityLevelFormComponent,
    EditComplexityLevelFormComponent,
    ComplexityLevelDetailsComponent
  ],
})
export class SharedModule {}
