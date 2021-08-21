import { RecipeCardComponent } from './components/recipes/recipe-card/recipe-card.component';
import { CategoriesSelectorComponent } from './components/categories/categories-selector/categories-selector.component';
import { ComplexityLevelSelectorComponent } from './components/complexity-levels/complexity-level-selector/complexity-level-selector.component';
import { RecipeDetailsComponent } from './components/recipes/recipe-details/recipe-details.component';
import { CategoryDetailsComponent } from './components/categories/category-details/category-details.component';
import { CreateComplexityLevelFormComponent } from './components/complexity-levels/create-complexity-level-form/create-complexity-level-form.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { EditRecipeFormComponent } from './components/recipes/edit-recipe-form/edit-recipe-form.component';
import { CreateRecipeFormComponent } from './components/recipes/create-recipe-form/create-recipe-form.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { CreateCategoryFormComponent } from './components/categories/create-category-form/create-category-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCategoryFormComponent } from './components/categories/edit-category-form/edit-category-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { EditComplexityLevelFormComponent } from './components/complexity-levels/edit-complexity-level-form/edit-complexity-level-form.component';
import { ComplexityLevelsListComponent } from './components/complexity-levels/complexity-levels-list/complexity-levels-list.component';
import { ComplexityLevelDetailsComponent } from './components/complexity-levels/complexity-level-details/complexity-level-details.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { HomeNavbarComponent } from './components/common/home-navbar/home-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularEditorModule,
    TableModule,
    ButtonModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgbModule
  ],
  declarations: [
    LoginFormComponent,
    CategoriesListComponent,
    CreateCategoryFormComponent,
    EditCategoryFormComponent,
    CategoryDetailsComponent,
    CategoriesSelectorComponent,
    RecipesListComponent,
    CreateRecipeFormComponent,
    EditRecipeFormComponent,
    RecipeDetailsComponent,
    ComplexityLevelsListComponent,
    CreateComplexityLevelFormComponent,
    EditComplexityLevelFormComponent,
    ComplexityLevelDetailsComponent,
    ComplexityLevelSelectorComponent,
    HomeNavbarComponent,
    RecipeCardComponent
  ],
  exports: [
    LoginFormComponent,
    CategoriesListComponent,
    CreateCategoryFormComponent,
    EditCategoryFormComponent,
    CategoryDetailsComponent,
    CategoriesSelectorComponent,
    RecipesListComponent,
    CreateRecipeFormComponent,
    EditRecipeFormComponent,
    RecipeDetailsComponent,
    ComplexityLevelsListComponent,
    CreateComplexityLevelFormComponent,
    EditComplexityLevelFormComponent,
    ComplexityLevelDetailsComponent,
    ComplexityLevelSelectorComponent,
    HomeNavbarComponent,
    RecipeCardComponent
  ],
})
export class SharedModule {}
