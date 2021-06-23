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

export const AdminLayoutRoutes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
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
