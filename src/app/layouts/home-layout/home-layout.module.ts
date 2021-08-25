import { RecipeComponent } from './../../pages/home/recipe/recipe.component';
import { CategoryComponent } from './../../pages/home/category/category.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout.component';
import { HomeLayoutRoutes } from './home-layout.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipesComponent } from 'app/pages/home/recipes/recipes.component';
import { CategoriesComponent } from 'app/pages/home/categories/categories.component';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeLayoutRoutes),
    FormsModule,
    NgbModule,
    SharedModule,
    ReactiveFormsModule,
    CalendarModule,
  ],
  declarations: [
    HomeLayoutComponent,
    CategoriesComponent,
    RecipesComponent,
    CategoryComponent,
    RecipeComponent,
  ],
})
export class HomeLayoutModule {}
