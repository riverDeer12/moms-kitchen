import { UsersComponent } from '../../pages/admin/users/users.component';
import { CategoryInfoComponent } from '../../pages/admin/categories/category-info/category-info.component';
import { EditComplexityLevelComponent } from '../../pages/admin/complexity-levels/edit-complexity-level/edit-complexity-level.component';
import { CreateComplexityLevelComponent } from '../../pages/admin/complexity-levels/create-complexity-level/create-complexity-level.component';
import { ComplexityLevelsListComponent } from '../../shared/components/complexity-levels/complexity-levels-list/complexity-levels-list.component';
import { ComplexityLevelsComponent } from '../../pages/admin/complexity-levels/complexity-levels.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/admin/dashboard/dashboard.component';
import { RecipesComponent } from 'app/pages/admin/recipes/recipes.component';
import { CategoriesComponent } from 'app/pages/admin/categories/categories.component';
import { CreateCategoryComponent } from 'app/pages/admin/categories/create-category/create-category.component';
import { CategoriesListComponent } from 'app/shared/components/categories/categories-list/categories-list.component';
import { EditCategoryComponent } from 'app/pages/admin/categories/edit-category/edit-category.component';
import { CreateRecipeComponent } from 'app/pages/admin/recipes/create-recipe/create-recipe.component';
import { EditRecipeComponent } from 'app/pages/admin/recipes/edit-recipe/edit-recipe.component';
import { RecipesListComponent } from 'app/shared/components/recipes/recipes-list/recipes-list.component';
import { ComplexityLevelInfoComponent } from 'app/pages/admin/complexity-levels/complexity-level-info/complexity-level-info.component';
import { RecipeInfoComponent } from 'app/pages/admin/recipes/recipe-info/recipe-info.component';
import {RecipeResolver} from '../../core/resolvers/recipe.resolver';
import {CategoryResolver} from '../../core/resolvers/category.resolver';
import {ComplexityLevelResolver} from '../../core/resolvers/complexity-level.resolver';

export const AdminLayoutRoutes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipesListComponent
      },
      {
        path: 'create',
        component: CreateRecipeComponent,
      },
      {
        path: 'info/:id',
        component: RecipeInfoComponent,
        resolve: {
          recipe: RecipeResolver
        }
      },
      {
        path: 'edit/:id',
        component: EditRecipeComponent,
        resolve: {
          recipe: RecipeResolver
        }
      }
    ]
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    children: [
      {
        path: '',
        component: CategoriesListComponent
      },
      {
        path: 'create',
        component: CreateCategoryComponent,
      },
      {
        path: 'info/:id',
        component: CategoryInfoComponent,
        resolve: {
          category: CategoryResolver
        }
      },
      {
        path: 'edit/:id',
        component: EditCategoryComponent,
        resolve: {
          category: CategoryResolver
        }
      }
    ]
  },
  {
    path: 'complexity-levels',
    component: ComplexityLevelsComponent,
    children: [
      {
        path: '',
        component: ComplexityLevelsListComponent
      },
      {
        path: 'create',
        component: CreateComplexityLevelComponent,
      },
      {
        path: 'info/:id',
        component: ComplexityLevelInfoComponent,
        resolve: {
          complexityLevel: ComplexityLevelResolver
        }
      },
      {
        path: 'edit/:id',
        component: EditComplexityLevelComponent,
        resolve: {
          complexityLevel: ComplexityLevelResolver
        }
      }
    ]
  },
  {
    path: 'users',
    component: UsersComponent
  },
  { path: 'dashboard', component: DashboardComponent }
];
