import { EditComplexityLevelComponent } from './../../pages/complexity-levels/edit-complexity-level/edit-complexity-level.component';
import { CreateComplexityLevelComponent } from './../../pages/complexity-levels/create-complexity-level/create-complexity-level.component';
import { ComplexityLevelsListComponent } from './../../shared/components/complexity-levels/complexity-levels-list/complexity-levels-list.component';
import { ComplexityLevelsComponent } from './../../pages/complexity-levels/complexity-levels.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { RecipesComponent } from 'app/pages/recipes/recipes.component';
import { CategoriesComponent } from 'app/pages/categories/categories.component';
import { CreateCategoryComponent } from 'app/pages/categories/create-category/create-category.component';
import { CategoriesListComponent } from 'app/shared/components/categories/categories-list/categories-list.component';
import { EditCategoryComponent } from 'app/pages/categories/edit-category/edit-category.component';
import { CreateRecipeComponent } from 'app/pages/recipes/create-recipe/create-recipe.component';
import { EditRecipeComponent } from 'app/pages/recipes/edit-recipe/edit-recipe.component';
import { RecipesListComponent } from 'app/shared/components/recipes/recipes-list/recipes-list.component';
import { ComplexityLevelInfoComponent } from 'app/pages/complexity-levels/complexity-level-info/complexity-level-info.component';

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
        path: 'edit/:id',
        component: EditRecipeComponent,
      },
    ],
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
        path: 'edit/:id',
        component: EditCategoryComponent,
      },
    ],
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
      },
      {
        path: 'edit/:id',
        component: EditComplexityLevelComponent,
      },
    ],
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user', component: UserComponent },
  { path: 'table', component: TableComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'upgrade', component: UpgradeComponent },
];
