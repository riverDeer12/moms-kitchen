import { Router } from '@angular/router';
import { CategoriesService } from './../../../shared/services/categories/categories.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'app/shared/dtos/categories/category';
import { fadeInAnimation } from 'app/shared/animations/page.animation';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  animations: [fadeInAnimation]
})
export class CategoriesComponent implements OnInit {
  loadingData: boolean;
  categories: Category[];

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) {
    this.loadingData = true;
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesService
      .getActiveCategories()
      .subscribe((response: Category[]) => {
        this.categories = response.map((x) => Object.assign(new Category(), x));
        this.loadingData = false;
      });
  }

  openCategoryRecipesPage(id: string): void {
    this.router.navigateByUrl('/category/' + id);
  }
}
