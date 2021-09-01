import { RecipeComponent } from './../../pages/home/recipe/recipe.component';
import { ContactComponent } from './../../pages/home/contact/contact.component';
import { HomeComponent } from './../../pages/home/home.component';
import { Routes } from '@angular/router';
import { CategoriesComponent } from 'app/pages/home/categories/categories.component';
import { RecipesComponent } from 'app/pages/home/recipes/recipes.component';
import { CategoryComponent } from 'app/pages/home/category/category.component';

export const HomeLayoutRoutes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
    path: 'recipes',
    component: RecipesComponent
  },
  {
    path: 'recipes/:id',
    component: RecipeComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'categories/:id',
    component: CategoryComponent
  },
  {
    path: 'contact',
    component: ContactComponent
},
];
