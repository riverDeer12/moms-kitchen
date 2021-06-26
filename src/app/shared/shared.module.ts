import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { EditRecipeFormComponent } from './components/recipes/edit-recipe-form/edit-recipe-form.component';
import { CreateRecipeFormComponent } from './components/recipes/create-recipe-form/create-recipe-form.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { CreateCategoryFormComponent } from './components/categories/create-category-form/create-category-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCategoryFormComponent } from './components/categories/edit-category-form/edit-category-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    CreateCategoryFormComponent,
    CategoriesListComponent,
    EditCategoryFormComponent,
    CreateRecipeFormComponent,
    EditRecipeFormComponent,
    LoginFormComponent
  ],
  exports: [
    CreateCategoryFormComponent,
    CategoriesListComponent,
    EditCategoryFormComponent,
    CreateRecipeFormComponent,
    EditRecipeFormComponent,
    LoginFormComponent
  ],
})
export class SharedModule {}
