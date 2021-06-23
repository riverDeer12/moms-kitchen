import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { CreateCategoryFormComponent } from './components/categories/create-category-form/create-category-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreateCategoryFormComponent, CategoriesListComponent],
  exports: [CreateCategoryFormComponent, CategoriesListComponent]
})
export class SharedModule { }
