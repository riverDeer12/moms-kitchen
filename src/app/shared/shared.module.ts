import { EditRecipeFormComponent } from './components/recipes/edit-recipe-form/edit-recipe-form.component';
import { CreateRecipeFormComponent } from './components/recipes/create-recipe-form/create-recipe-form.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { CreateCategoryFormComponent } from './components/categories/create-category-form/create-category-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCategoryFormComponent } from './components/categories/edit-category-form/edit-category-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CreateCategoryFormComponent,
    CategoriesListComponent,
    EditCategoryFormComponent,
    CreateRecipeFormComponent,
    EditRecipeFormComponent
  ],
  exports: [
    CreateCategoryFormComponent,
    CategoriesListComponent,
    EditCategoryFormComponent,
    CreateRecipeFormComponent,
    EditRecipeFormComponent
  ],
})
export class SharedModule {}
