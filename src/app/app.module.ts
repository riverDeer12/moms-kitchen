import { HomeComponent } from './pages/home/home.component';
import { AdminInterceptor } from './shared/interceptors/admin.interceptor';
import { ComplexityLevelsComponent } from './pages/complexity-levels/complexity-levels.component';
import { CommonService } from 'app/shared/services/common/common.service';
import { CategoriesService } from './shared/services/categories/categories.service';
import { RecipesService } from './shared/services/recipes/recipes.service';
import { AuthService } from './shared/services/auth/auth.service';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { ComplexityLevelsService } from './shared/services/complexity-levels/complexity-levels.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    RecipesComponent,
    CategoriesComponent,
    LoginComponent,
    HomeComponent,
    ComplexityLevelsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    NgbModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    HttpClientModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot(),
    AngularEditorModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AdminInterceptor,
      multi: true
    },
    AuthService,
    CommonService,
    RecipesService,
    CategoriesService,
    ComplexityLevelsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
