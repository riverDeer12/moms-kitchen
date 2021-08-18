import { ContactComponent } from './../../pages/home/contact/contact.component';
import { HomeComponent } from './../../pages/home/home.component';
import { Routes } from '@angular/router';
import { CategoryInfoComponent } from 'app/pages/admin/categories/category-info/category-info.component';
import { CreateRecipeComponent } from 'app/pages/admin/recipes/create-recipe/create-recipe.component';
import { RecipeInfoComponent } from 'app/pages/admin/recipes/recipe-info/recipe-info.component';
import { CategoriesComponent } from 'app/pages/home/categories/categories.component';
import { RecipesComponent } from 'app/pages/home/recipes/recipes.component';

export const HomeLayoutRoutes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: 'create',
        component: CreateRecipeComponent,
      },
      {
        path: '/:id',
        component: RecipeInfoComponent,
      },
    ],
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    children: [
      {
        path: '/:id',
        component: CategoryInfoComponent,
      },
    ],
  },
  {
    path: 'contact',
    component: ContactComponent
},
];
