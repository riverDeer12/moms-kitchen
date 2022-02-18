import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './pages/home/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminInterceptor } from './core/interceptors/admin.interceptor';
import { ComplexityLevelsComponent } from './pages/admin/complexity-levels/complexity-levels.component';
import { AuthService } from './core/services/auth/auth.service';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { RecipesComponent } from './pages/admin/recipes/recipes.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './pages/admin/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxCaptchaModule } from 'ngx-captcha';
import {
  MomsKitchenCommonModule,
  CommonService,
  RecipesService,
  CategoriesService,
  ComplexityLevelsService,
} from 'moms-kitchen-common';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    RecipesComponent,
    CategoriesComponent,
    LoginComponent,
    HomeComponent,
    ComplexityLevelsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    NgbModule,
    RouterModule.forRoot(AppRoutes, { preloadingStrategy: PreloadAllModules }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    HttpClientModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot(),
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    MomsKitchenCommonModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AdminInterceptor,
      multi: true,
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
